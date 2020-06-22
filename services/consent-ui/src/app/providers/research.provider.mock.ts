import { Injectable } from "@angular/core";
import { ResearchProvider } from './research.provider';
import { Research } from '../models/research';
import { Datasource } from '../models/datasource';
import { Observable } from 'rxjs';

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
      datasources: [] // this.datasourceService.getDatasourceById('1'), The research api should return the datasource with the research
    }
  ];

  getResearchById(id: string) {
    const research = this.store.find(x => x.id === id)
    return research as unknown as Observable<any>;
  }

  getResearches() {
    return this.store as unknown as Observable<any>;
  }
}