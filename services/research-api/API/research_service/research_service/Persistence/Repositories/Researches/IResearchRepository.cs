using research_service.Common;
using research_service.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Persistence.Repositories.Researches
{
    public interface IResearchRepository
    {
        Task<DataResponseObject<ResearchEntity>> GetResearchById(Guid id);
        Task<DataResponseObject<IEnumerable<ResearchEntity>>> GetResearches();
        Task<DataResponseObject<ResearchEntity>> CreateResearch(ResearchEntity research);
        Task<DataResponseObject<ResearchEntity>> UpdateResearch(Guid id, ResearchEntity research);
        Task<DataResponseObject<ResearchEntity>> DeleteResearch(Guid id);
    }
}
