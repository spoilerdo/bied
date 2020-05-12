using DatasourceGRPC;
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
        /// <summary>
        /// Get specific research by id
        /// </summary>
        /// <param name="id">the id of the research to find</param>
        /// <returns>data responseobject containing object or error</returns>
        Task<DataResponseObject<ResearchEntity>> GetResearchById(Guid id);
        /// <summary>
        /// Get all researches
        /// </summary>
        /// <returns>all found researches</returns>
        Task<DataResponseObject<IEnumerable<ResearchEntity>>> GetResearches();
        /// <summary>
        /// Create a research
        /// </summary>
        /// <param name="research">the research to create</param>
        /// <returns>data responseobject containing object or error</returns>
        Task<DataResponseObject<ResearchEntity>> CreateResearch(ResearchEntity research);
        /// <summary>
        /// Update research
        /// </summary>
        /// <param name="id">the id of the research to update</param>
        /// <param name="research">the parameters to apply to the research</param>
        /// <returns>data responseobject containing object or error</returns>
        Task<DataResponseObject<ResearchEntity>> UpdateResearch(Guid id, ResearchEntity research);
        /// <summary>
        /// Delete research
        /// </summary>
        /// <param name="id">the id of the research to delete</param>
        /// <returns>data responseobject indicationg success or failure</returns>
        Task<DataResponseObject<ResearchEntity>> DeleteResearch(Guid id);

        /// <summary>
        /// Add datasource to research with given id
        /// </summary>
        /// <param name="id">ID of the research</param>
        /// <param name="datasource">Datasource to add to the research</param>
        /// <returns>Dataresponseobject containing object or error</returns>
        Task<DataResponseObject<ResearchEntity>> AddDataSourceToResearch(Guid id, Datasource datasource);
        /// <summary>
        /// remove datasource from research with given id
        /// </summary>
        /// <param name="id">ID of the research</param>
        /// <param name="datasource">Datasource to add to the research</param>
        /// <returns>Dataresponseobject containing object or error</returns>
        Task<DataResponseObject<ResearchEntity>> RemoveDataSourceFromResearch(Guid id, Datasource datasource);
    }
}
