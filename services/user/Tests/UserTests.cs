using AuthenticationService;
using BusinessLayer;
using Grpc.Core;
using Moq;
using PersistenceLayer;
using System;
using Xunit;

namespace Tests
{
    public class UserTests
    {
        private BusinessLogic Logic { get; set; }
        private Guid TestUserId = Guid.Parse("f94554ce-c96f-4903-a2fa-93496e9e9a9c");

        public UserTests()
        {

            //Mocking of the authentication client.
            var mock = new Mock<Authentication.AuthenticationClient>();
            mock.Setup(m => m.CreateUser(It.IsAny<RegisterRequest>(), new CallOptions())).Throws<Exception>();
            mock.Setup(m => m.CreateUser(It.Is<RegisterRequest>(r => (r as RegisterRequest).Password == "password"), new CallOptions())).Returns(new Empty());

            Logic = new BusinessLogic(new InMemoryContext<UserContext>(), mock.Object);
        }

        [Fact]
        public void CreateUserPassesCorrectPasswordTest()
        {
            Logic.CreateUser("Bob", "Melk", "test@email.com", "password");
        }

        [Fact]
        public void CreateUserPassesWrongPasswordTest()
        {
            Assert.Throws<BusinessException>(() => Logic.CreateUser("Bob", "Melk", "test@email.com", "password1"));
        }

        [Fact]
        public void GetUserTest()
        {
            var user = Logic.CreateUser("Bob", "Melk", "test@email.com", "password");
            user = Logic.GetUserById(user.Guid);
            Assert.NotNull(user);
            Assert.Equal("Bob", user.FirstName);
            Assert.Equal("Melk", user.LastName);
            Assert.Equal("test@email.com", user.Email);
        }


        [Fact]
        public void GetUsersTest()
        {
            Logic.CreateUser("Bob", "Melk", "test1@email.com", "password");
            Logic.CreateUser("Bob2", "Melk", "test2@email.com", "password");
            Logic.CreateUser("Bob3", "Melk", "test3@email.com", "password");
            var users = Logic.GetUsers();
            Assert.NotNull(users);
            Assert.Equal(3,users.Count);
        }

        [Fact]
        public void GetNonExistantUserTest()
        {
            Assert.Throws<BusinessException>(() => Logic.GetUserById(TestUserId));
        }



        [Fact]
        public void DeleteUserTest()
        {
            var user = Logic.CreateUser("Bob", "Melk", "test@email.com", "password");
            Logic.DeleteUser(user.Guid);
        }

        [Fact]
        public void DeleteNonExistantUserTest()
        {
            Assert.Throws<BusinessException>(() => Logic.DeleteUser(TestUserId));
        }
    }
}
