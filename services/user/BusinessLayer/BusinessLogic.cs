using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using PersistenceLayer;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AuthenticationService;
using System;
using UserService;
using UserServiceProto;

namespace BusinessLayer
{

    public class BusinessLogic
    {
        private UserContext Context { get; set; }
        private Authentication.AuthenticationClient AuthenticationClient { get; set; }

        public BusinessLogic(UserContext userContext, Authentication.AuthenticationClient authenticationClient)
        {
            this.AuthenticationClient = authenticationClient;
            this.Context = userContext;
        }

        public User GetUserById(Guid id)
        {
            var user = Context.Users.SingleOrDefault(u => u.Guid == id);

            if (user == null)
                throw new BusinessException("Could not find user with id=" + id);

            return user;
        }

        public void UpdateUser(User user)
        {
            Context.Users.Update(user);
            Context.SaveChanges();
        }


        public User CreateUser(string firstname, string lastname, string email, string password)
        {

            //Check email already in use.
            if (Context.Users.Any(u => u.Email == email))
                throw new BusinessException($"Email is already in use.");

            var addResult = Context.Users.Add(new User()
            {
                Guid = Guid.NewGuid(),
                FirstName = firstname,
                LastName = lastname,
                Email = email
            });

            Context.SaveChanges();

            Guid userid = addResult.Entity.Guid;

            CreateAuthenticationData(userid, password);

            return addResult.Entity;
        }

        public List<User> GetUsers()
        {
            return Context.Users.ToList();
        }

        private void CreateAuthenticationData(Guid userId, string password)
        {
            try
            {
                //Calling the authenitcation client for password registration. As this is not stored in the user service.
                AuthenticationClient.CreateUser(new RegisterRequest() { UserId = userId.ToString(), Password = password }, new CallOptions());
            }
            catch (Exception e)
            {
                throw new BusinessException($"Authentication service error: {e.Message}");
            }
        }

        public void DeleteUser(Guid userId)
        {
            var user = Context.Users.SingleOrDefault(u => u.Guid == userId);

            if (user == null)
                throw new BusinessException("No user exists with id = " + userId);

            AuthenticationClient.DeleteUser(new DeleteRequest() { UserId = userId.ToString() }, new CallOptions());

            Context.Users.Remove(user);
            Context.SaveChanges();
        }
    }
}
