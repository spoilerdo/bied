﻿using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserSvc.Security.Jwk
{
    public interface IJwkGenerator
    {
        JsonWebKey GenerateJwk();
    }
}
