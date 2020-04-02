using System;
using System.Linq;
using System.Threading.Tasks;
using BusinessLayer;
using Grpc.Core;
using UserServiceProto;

namespace UserService
{
    public class UserServiceImp : UserServiceProto.User_Service.User_ServiceBase
    {
        BusinessLogic Logic { get; set; }

        public UserServiceImp(BusinessLogic logic)
        {
            Logic = logic;
        }


        public override Task<UserResponse> CreateUser(UserCreateRequest req, ServerCallContext context)
        {
            return DoOrThrow(() => new UserResponse()
            {
                User = ConvertToProtoModel(Logic.CreateUser(req.Firstname,req.Lastname,req.Email,req.Password))
            }, context);
        }


        public override Task<UserResponse> GetUser(UserRequest request, ServerCallContext context)
        {
            if (!Guid.TryParse(request.Id, out Guid guid))
                throw new RpcException(Status.DefaultCancelled, "Can't parse id into a GUID");

            var user = DoOrThrow<User>(() => Logic.GetUserById(guid), context);

            return Task.FromResult(new UserResponse()
            {
                User = ConvertToProtoModel(user.Result)
            });
        }


        public override Task<Empty> DeleteUser(UserRequest request, ServerCallContext context)
        {
            return DoOrThrowEmpty(() => Logic.DeleteUser(Guid.Parse(request.Id)), context);
        }

        public override Task<UsersResponse> GetUsers(Empty request, ServerCallContext context)
        {
            return DoOrThrow(() =>
            {
                var users = Logic.GetUsers().Select(u => ConvertToProtoModel(u));
                var reply = new UsersResponse();
                reply.Users.AddRange(users);
                return reply;
            },context);
        }

        private static UserModel ConvertToProtoModel(User user)
        {
            return new UserModel()
            {
                Id = user.Guid.ToString(),
                Firstname = user.FirstName,
                Lastname = user.LastName,
                Email = user.Email,
            };
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
