import { Injectable } from "@angular/core";
import { ResearchProvider } from './research.provider';
import { Research } from '../models/research';
import { DatasourceProvider } from './datasource.provider';
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
      imageUrl: `data:image/jpeg;base64,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`,
      startDate: this.startDate,
      endDate: this.endDate,
      active: true,
      ownerId: '1',
      datasources: [this.datasourceService.getDatasourceById('1')]
    }
  ]

  getResearchById(id: string): Research {
    return this.store.find(x => x.id === id)
  }
}