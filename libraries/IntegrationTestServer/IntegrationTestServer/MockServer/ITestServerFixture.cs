﻿using Microsoft.AspNetCore.TestHost;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace MockServer
{
    public interface ITestServerFixture
    {
        HttpClient Client { get; }
        HttpMessageHandler MessageHandler { get; }
        TestServer TestServer { get; }
    }
}
