using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using HealthCheck.GRPC;
using AutoMapper;

namespace HealthCheck.Services
{
    /// <summary>
    /// Responsible for handling the GRPC protobuffer service logic
    /// </summary>
    public class HealthCheckService : HealthCheck_Service.HealthCheck_ServiceBase
    {
        private readonly ILogger<HealthCheckService> _logger;
        private readonly IMapper _mapper;

        public HealthCheckService(ILogger<HealthCheckService> logger, IMapper mapper)
        {
            _logger = logger;
            _mapper = mapper;
        }

        /// <summary>
        /// Create a questionnaire with the given parameters
        /// </summary>
        /// <param name="request">The data to create a questionnaire from</param>
        /// <param name="context">The server context</param>
        /// <returns>created Questionnaire or error indicating reason for failure</returns>
        public override Task<HealthCheckResponse> HealthCheck(HealthCheckRequest request, ServerCallContext context)
        {
            return Task.FromResult(new HealthCheckResponse
            {
                Healthy = true
            });
        }
    }
}