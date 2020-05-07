import { Injectable } from "@angular/core";
import { ResearchProvider } from './research.provider';
import { Research } from '../models/research';
import { Datasource } from '../models/datasource';

@Injectable()
export class ResearchMockProvider extends ResearchProvider {
  startDate: Date = new Date();
  endDate: Date = new Date();
  datasource: Datasource = null;

  private readonly store: Research[] = [
    {
      id: '1',
      name: 'Eenzaamheids onderzoek',
      description: 'Onderzoek naar eenzaamheid onder jongere',
      imageUrl: `https://www.jvc-julianadorp.nl/wp-content/uploads/20161129enquete_.jpg`,
      startDate: this.startDate,
      endDate: this.endDate,
      active: true,
      ownerId: '1',
      datasources: [this.datasourceService.getDatasourceById('1')]
    }
  ]

  getResearchById(id: string): Research {
    const research = this.store.find(x => x.id === id)
    return research;
  }

  getResearches(): Research[] {
    return this.store;
  }
}