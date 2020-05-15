using System;
using System.Threading.Tasks;
using AuthenticationServer;
using Grpc.Core;

namespace AuthenticationService
{
    public class AuthenticationServiceImp : Authentication.AuthenticationBase
    {
        Logic Logic { get; set; }

        public AuthenticationServiceImp(Logic logic)
        {
            Logic = logic;
        }

        public override Task<VerifyResponse> VerifyPassword(Credentials request, ServerCallContext context)
        {
            return DoOrThrow(() => new VerifyResponse()
            {
                Success = Logic.VerifyPassword(Guid.Parse(request.UserId), request.Password)
            }, context);
        }

        public override Task<Empty> CreateUser(RegisterRequest request, ServerCallContext context)
        {
            return DoOrThrowEmpty(() => Logic.CreateUserAuthenticationData(Guid.Parse(request.UserId), request.Password), context);
        }

        public override Task<Empty> DeleteUser(DeleteRequest request, ServerCallContext context)
        {
            return DoOrThrowEmpty(() => Logic.DeleteUserAuthenticationData(Guid.Parse(request.UserId)), context);
        }

        public override Task<TokenResponse> GenerateToken(Credentials request, ServerCallContext context)
        {
            return DoOrThrow(() => new TokenResponse()
            {
                Token = Logic.GenerateJwtToken(Guid.Parse(request.UserId), request.Password)
            },context);
        }

        public Task<T> DoOrThrow<T>(Func<T> func, ServerCallContext context)
        {
            try
            {
                return Task.FromResult(func());
            }
            catch (Exception e)
            {
                context.Status = new Status(StatusCode.InvalidArgument, e.Message);
                throw new RpcException(context.Status);
            }
        }

        public Task<Empty> DoOrThrowEmpty(Action action, ServerCallContext context)
        {
            Empty empty() { action(); return new Empty(); }
            return DoOrThrow(empty, context);
        }
    }
}
