using AutoMapper;
using DatasourceGRPC;
using Grpc.Core;
using research_service.Persistence.Entities;
using research_service.Persistence.Repositories.Researches;
using ResearchGRPC;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace research_service.Services
{
    /// <summary>
    /// Responsible for handling the GRPC protobuffer service logic
    /// </summary>
    public class ResearchService : Research_Service.Research_ServiceBase
    {
        private readonly IResearchRepository _researchRepository;
        private readonly IMapper _mapper;

        public ResearchService(IResearchRepository researchRepository, IMapper mapper)
        {
            _researchRepository = researchRepository;
            _mapper = mapper;
        }

        /// <summary>
        /// Create a research with the given parameters
        /// </summary>
        /// <param name="request">The data to create a research for</param>
        /// <param name="context">The server context</param>
        /// <returns>created research or error indicating reason for failure</returns>
        public override async Task<Research> CreateResearch(ResearchCreateRequest request, ServerCallContext context)
        {
            var createdResearch = await _researchRepository.CreateResearch(_mapper.Map<ResearchEntity>(request));
            if(!createdResearch.Success)
            {
                throw new RpcException(new Status(StatusCode.InvalidArgument, createdResearch.Message));
            }
            return _mapper.Map<Research>(createdResearch.Data); 
        }

        /// <summary>
        /// Delete a research with the given parameters
        /// </summary>
        /// <param name="request">the parameters on which to delete a research</param>
        /// <param name="context">the server context</param>
        /// <returns>A response indicating success/failure</returns>
        public override async Task<ResearchEmptyResponse> DeleteResearch(ResearchIdRequest request, ServerCallContext context)
        {
            var deletedResearch = await _researchRepository.DeleteResearch(new Guid(request.Id));
            if(!deletedResearch.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, deletedResearch.Message));
            }
            return new ResearchEmptyResponse();
        }

        /// <summary>
        /// Edit a research with the given parameters
        /// </summary>
        /// <param name="request">The parameters on which to edit a research</param>
        /// <param name="context">the server context</param>
        /// <returns>The edited research or a message indicating reason for failure</returns>
        public override async Task<Research> EditResearch(ResearchEditRequest request, ServerCallContext context)
        {
            var editedResearch = await _researchRepository.UpdateResearch(new Guid(request.Id), _mapper.Map<ResearchEntity>(request));
            if(!editedResearch.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, editedResearch.Message));
            }
            return _mapper.Map<Research>(editedResearch.Data);
        }

        /// <summary>
        /// Get a specific research
        /// </summary>
        /// <param name="request">the parameters on which to find a research</param>
        /// <param name="context">the server context</param>
        /// <returns>The found research or a message indicating reason of failure</returns>
        public override async Task<Research> GetResearch(ResearchIdRequest request, ServerCallContext context)
        {
            var foundResearch = await _researchRepository.GetResearchById(new Guid(request.Id));
            if(!foundResearch.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, foundResearch.Message));
            }
            return _mapper.Map<Research>(foundResearch.Data);
        }

        /// <summary>
        /// Get all researches
        /// </summary>
        /// <param name="request">empty parameters</param>
        /// <param name="context">the server context</param>
        /// <returns>all researches</returns>
        public override async Task<Researches> GetResearches(GetResearchesRequest request, ServerCallContext context)
        {
            var researches = await _researchRepository.GetResearches();
            if(!researches.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, researches.Message));
            }
            return new Researches
            {
                Researches_ = { _mapper.Map<IEnumerable<Research>>(researches.Data) }
            };
        }

        /// <summary>
        /// Add data source to research
        /// </summary>
        /// <param name="request">data source to add to research</param>
        /// <param name="context">the server context</param>
        /// <returns>Updated research or message indicating reason for failure</returns>
        public override Task<Research> AddDatasourceToResearch(Datasource request, ServerCallContext context)
        {
            throw new NotImplementedException();
            //var research = await _researchRepository.AddDataSourceToResearch(request.Id, request);
        }

        /// <summary>
        /// Handle sending invites for specific research
        /// </summary>
        /// <param name="request">The emails to send invite to</param>
        /// <param name="context">the server context</param>
        /// <returns>Message indicating success/failure</returns>
        public override Task<EmailEmptyResponse> InviteUsersToResearch(EmailRequests request, ServerCallContext context)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Remmove data source from research
        /// </summary>
        /// <param name="request">data source to remove from research</param>
        /// <param name="context">the server context</param>
        /// <returns>updated research or message indicating failure</returns>
        public override Task<Research> RemoveDatasourceFromResearch(DatasourceIdResearchRequest request, ServerCallContext context)
        {
            throw new NotImplementedException();
        }
    }
}
