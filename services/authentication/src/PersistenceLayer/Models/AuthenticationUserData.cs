using System;
using System.ComponentModel.DataAnnotations;

namespace AuthenticationService.Persistence.Models
{
    public class UserAuthenticationData
    {
        [Key]
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public string HashedPassword { get; set; }
        public string Salt { get; set; }
    }
}
