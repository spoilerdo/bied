using AutoMapper;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using UserGRPC;
using UserSvc.Domain;
using UserSvc.Persistence.Context;

namespace UserSvc.Services
{
    public class UserService : User_Service.User_ServiceBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;
        public UserService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IMapper mapper, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _configuration = configuration;
        }

        public override async Task<UserResponse> CreateUser(UserCreateRequest request, ServerCallContext context)
        {
            //first check if password is strong enough
            List<string> passwordErrors = await ValidatePassword(request.Password);
            if(passwordErrors.Count > 0)
            {
                throw new RpcException(new Status(StatusCode.InvalidArgument, $"Password is too weak, the following changes are required {String.Join(" - ", passwordErrors)}"));
            }

            var userToCreate = new ApplicationUser()
            {
                UserName = request.Username,
                Email = request.Email,
                FirstName = request.Firstname,
                LastName = request.Lastname
            };

            var result = await _userManager.CreateAsync(userToCreate, request.Password);
            if (result.Succeeded)
            {
                return new UserResponse()
                {
                    User = _mapper.Map<UserModel>(userToCreate)
                };
            }

            throw new RpcException(new Status(StatusCode.InvalidArgument, "User could not be created"));
        }

        public override async Task<UserGRPC.Empty> DeleteUser(UserRequest request, ServerCallContext context)
        {
            var user = await _userManager.FindByIdAsync(request.Id);
            var result = await _userManager.DeleteAsync(user);
            if(result == IdentityResult.Success)
            {
                return new UserGRPC.Empty();
            }

            throw new RpcException(new Status(StatusCode.InvalidArgument, String.Join(" - ", result.Errors)));
        }

        public override async Task<UserResponse> EditUser(UserEditRequest request, ServerCallContext context)
        {
            var user = await _userManager.FindByIdAsync(request.Id);
            user.FirstName = request.Firstname;
            user.LastName = request.Lastname;
            user.Email = request.Email;
            user.UserName = request.Username;
            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                return _mapper.Map<UserResponse>(user);
            }
            throw new RpcException(new Status(StatusCode.InvalidArgument, String.Join(" - ", result.Errors)));
        }

        public override async Task<UserResponse> GetUser(UserRequest request, ServerCallContext context)
        {
            var user = await _userManager.FindByIdAsync(request.Id);
            if(user != null)
            {
                return _mapper.Map<UserResponse>(user);
            }
            throw new RpcException(new Status(StatusCode.NotFound, "User not found"));
        }

        public override async Task<UsersResponse> GetUsers(UserGRPC.Empty request, ServerCallContext context)
        {
            var users = await _userManager.Users.ToListAsync();
            return new UsersResponse
            {
                Users = { _mapper.Map<IEnumerable<UserModel>>(users) }
            };
        }

        public override async Task<LoginResponse> Login(LoginRequest request, ServerCallContext context)
        {
            var user = await _userManager.FindByNameAsync(request.Username);
            var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
            if (result.Succeeded)
            {
                //get any claims from the logged in user
                var foundClaims = await _userManager.GetClaimsAsync(user);
                //union these claims with custom claims
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                }.Union(foundClaims);

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("jwtData:JwtKey")));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                         issuer: _configuration.GetValue<string>("jwtData:Issuer"),
                         audience: _configuration.GetValue<string>("jwtData:Audience"),
                         claims: claims,
                         notBefore: DateTime.UtcNow,
                         expires: DateTime.UtcNow.AddDays(1),
                         signingCredentials: creds
                );

                return new LoginResponse()
                {
                    Token = new JwtSecurityTokenHandler().WriteToken(token),
                    Expiration = Timestamp.FromDateTime(token.ValidTo)
                };
            }

            throw new RpcException(new Status(StatusCode.Unauthenticated, "Invalid login"));
        }

        private async Task<List<string>> ValidatePassword(string password)
        {
            List<string> passwordErrors = new List<string>();
            var validators = _userManager.PasswordValidators;
            foreach (var validator in validators)
            {
                var validateResult = await validator.ValidateAsync(_userManager, null, password);
                if (!validateResult.Succeeded)
                {
                    foreach (var error in validateResult.Errors)
                    {
                        passwordErrors.Add(error.Description);
                    }
                }
            }

            return passwordErrors;
        }
    }
}
