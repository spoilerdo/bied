using DatasourceGRPC;
using Microsoft.EntityFrameworkCore;
using research_service.Common;
using research_service.Persistence.Context;
using research_service.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Persistence.Repositories.Researches
{
    public class ResearchRepository : IResearchRepository
    {
        private readonly ResearchDbContext _context;

        public ResearchRepository(ResearchDbContext context)
        {
            _context = context;
        }

        public async Task<DataResponseObject<ResearchEntity>> CreateResearch(ResearchEntity research)
        {
            _context.Researches.Add(research);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ResearchEntity>(research);
        }

        public async Task<DataResponseObject<ResearchEntity>> DeleteResearch(Guid id)
        {
            ResearchEntity foundResearch = await _context.Researches.FindAsync(id);
            if (foundResearch == null)
            {
                //return server response object
                return new DataResponseObject<ResearchEntity>("Research could not be found");
            }
            _context.Researches.Remove(foundResearch);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ResearchEntity>(true);
        }

        public async Task<DataResponseObject<ResearchEntity>> GetResearchById(Guid id)
        {
            ResearchEntity foundResearch = await _context.Researches.FindAsync(id);
            if(foundResearch == null)
            {
                return new DataResponseObject<ResearchEntity>("Research could not be found");
            }
            return new DataResponseObject<ResearchEntity>(foundResearch);
        }

        public async Task<DataResponseObject<IEnumerable<ResearchEntity>>> GetResearches()
        {
            var researches = await _context.Researches.ToListAsync();
            return new DataResponseObject<IEnumerable<ResearchEntity>>(researches);
        }

        public async Task<DataResponseObject<ResearchEntity>> RemoveDataSourceFromResearch(Guid id, ResearchDatasource datasource)
        {
            var research = await _context.Researches.FindAsync(id);
            if(research == null)
            {
                return new DataResponseObject<ResearchEntity>("Research could not be found");
            }
            if(!research.ResearchDataSources.Contains(datasource))
            {
                return new DataResponseObject<ResearchEntity>("Datasource not connected to research");
            }

            research.ResearchDataSources.Remove(datasource);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ResearchEntity>(research);
        }

        public async Task<DataResponseObject<ResearchEntity>> AddDataSourceToResearch(Guid id, ResearchDatasource datasource)
        {
            var research = await _context.Researches.FindAsync(id);
            if (research == null)
            {
                return new DataResponseObject<ResearchEntity>("Research could not be found");
            }
            if (research.ResearchDataSources.Contains(datasource))
            {
                return new DataResponseObject<ResearchEntity>("Datasource already connected to research");
            }

            research.ResearchDataSources.Add(datasource);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ResearchEntity>(research);
        }

        public async Task<DataResponseObject<ResearchEntity>> UpdateResearch(Guid id, ResearchEntity research)
        {
            ResearchEntity foundResearch = await _context.Researches.FindAsync(id);
            if (foundResearch == null)
            {
                return new DataResponseObject<ResearchEntity>("Research could not be found");
            }
            _context.Entry(foundResearch).CurrentValues.SetValues(research);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ResearchEntity>(foundResearch);
        }
    }
}
