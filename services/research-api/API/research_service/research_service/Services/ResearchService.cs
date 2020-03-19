using AutoMapper;
using Grpc.Core;
using research_service.Persistence.Entities;
using research_service.Persistence.Repositories.Researches;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Services
{
    public class Research_Service : ResearchService.ResearchServiceBase
    {
        private readonly IResearchRepository _researchRepository;
        private readonly IMapper _mapper;

        public Research_Service(IResearchRepository researchRepository, IMapper mapper)
        {
            _researchRepository = researchRepository;
            _mapper = mapper;
        }

        public override async Task<Research> CreateResearch(ResearchCreateRequest request, ServerCallContext context)
        {
            var createdResearch = await _researchRepository.CreateResearch(_mapper.Map<ResearchEntity>(request));
            if(!createdResearch.Success)
            {
                throw new NotImplementedException("Error handling for GRPC not implemented yet");
            }
            return _mapper.Map<Research>(createdResearch.Data); 
        }

        public override async Task<ResearchEmptyResponse> DeleteResearch(ResearchIdRequest request, ServerCallContext context)
        {
            var deletedResearch = await _researchRepository.DeleteResearch(new Guid(request.Id));
            if(!deletedResearch.Success)
            {
                throw new NotImplementedException("Error handling for GRPC not implemented yet");
            }
            return new ResearchEmptyResponse();
        }

        public override async Task<Research> EditResearch(ResearchEditRequest request, ServerCallContext context)
        {
            var editedResearch = await _researchRepository.UpdateResearch(new Guid(request.Id), _mapper.Map<ResearchEntity>(request));
            if(!editedResearch.Success)
            {
                throw new NotImplementedException("Error handling for GRPC not implemented yet");
            }
            return _mapper.Map<Research>(editedResearch.Data);
        }

        public override async Task<Research> GetResearch(ResearchIdRequest request, ServerCallContext context)
        {
            var foundResearch = await _researchRepository.GetResearchById(new Guid(request.Id));
            if(!foundResearch.Success)
            {
                throw new NotImplementedException("Error handling for GRPC not implemented yet");
            }
            return _mapper.Map<Research>(foundResearch.Data);
        }

        public override async Task<Researches> GetResearches(GetResearchesRequest request, ServerCallContext context)
        {
            var researches = await _researchRepository.GetResearches();
            if(!researches.Success)
            {
                throw new NotImplementedException("Error handling for GRPC not implemented yet");
            }
            return new Researches
            {
                Researches_ = { _mapper.Map<IEnumerable<Research>>(researches.Data) }
            };
        }

        public override Task<Research> AddDatasourceToResearch(Datasource request, ServerCallContext context)
        {
            throw new NotImplementedException();
        }

        public override Task<EmailEmptyResponse> InviteUsersToResearch(EmailRequests request, ServerCallContext context)
        {
            throw new NotImplementedException();
        }

        public override Task<Research> RemoveDatasourceFromResearch(DatasourceIdRequest request, ServerCallContext context)
        {
            throw new NotImplementedException();
        }
    }
}
