using AuthenticationServer;
using AuthenticationService;
using AuthenticationService.Persistence;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Xunit;

namespace Tests
{
    public class BuisnessLogicUnitTests
    {
        public Logic Logic { get; set; }
        private Guid AnUserId = new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557");

        public BuisnessLogicUnitTests()
        {

            var context = new InMemoryContext<AuthenticationContext>();
            Logic = new Logic(context);
        }


        [Fact]
        public void ShouldCreateWithNoException()
        {
            Logic.CreateUserAuthenticationData(AnUserId, "password");
        }

        [Fact]
        public void ShouldDeleteCreatedEntry()
        {
            Logic.CreateUserAuthenticationData(new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557"), "password");
            Logic.DeleteUserAuthenticationData(new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557"));
        }

        [Fact]
        public void ShouldVerifyCorrectPassword()
        {
            Guid userId = new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557");
            Logic.CreateUserAuthenticationData(userId, "password");
            Assert.True(Logic.VerifyPassword(userId, "password"));
        }

        [Fact]
        public void ShouldNotVerifyWrongPassword()
        {
            Guid userId = new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557");
            Logic.CreateUserAuthenticationData(userId, "password");
            Assert.False(Logic.VerifyPassword(userId, "wrongpassword"));
        }

        [Fact]
        public void ShouldThrowExcepetionWhenUserNotCreated()
        {
            Guid userId = new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557");
            Assert.Throws<BusinessException>(() => Logic.VerifyPassword(userId, "wrongpassword"));
        }

        [Fact]
        public void ShouldThrowExceptionWhenEntryNotExists()
        {
            Assert.Throws<BusinessException>(() => Logic.DeleteUserAuthenticationData(new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557")));
        }

        [Fact]
        public void ShouldThrowExceptionOnDoubleEntry()
        {
            Logic.CreateUserAuthenticationData(new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557"), "password");
            Assert.Throws<BusinessException>(() => Logic.CreateUserAuthenticationData(new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557"), "password"));
        }


        [Fact]
        public void ShouldGenerateToken()
        {
            Guid userId = new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557");
            Logic.CreateUserAuthenticationData(userId, "password");
            var rawtoken = Logic.GenerateJwtToken(userId, "password");

            var token = new JwtSecurityToken(rawtoken);
            Assert.True(token.Payload["userId"].ToString() == "49ad5f6a-14b3-4fef-a36f-ac965c6d3557");
        }

        [Fact]
        public void ShouldNotVerifyToGenerateToken()
        {
            Guid userId = new Guid("49ad5f6a-14b3-4fef-a36f-ac965c6d3557");
            Logic.CreateUserAuthenticationData(userId, "password");
            Assert.Throws<BusinessException>(() => Logic.GenerateJwtToken(userId, "password1"));
        }
    }
}
