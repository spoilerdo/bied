import { Injectable } from "@angular/core";
import { DatasourceProvider } from './datasource.provider';
import { Datasource } from '../models/datasource';

@Injectable()
export class DatasourceMockProvider extends DatasourceProvider {
  private readonly store: Datasource[] = [
    {
      id: '1',
      name: 'Twitter data',
      description: "Fetches information about the tweets you make on twitter",
      reference: "1",
      active: true
    },
    {
      id: '2',
      name: 'Facebook data',
      description: "Fetches information about the posts you make on facebook",
      reference: "1",
      active: false
    }
  ];

  getDatasourceById(id: string): Datasource {
    return this.store.find(x => x.id === id);
  }

  deleteAllData(userId: string): boolean {
    console.log(`Delete all data called for user: ${userId}`)
    return Math.random() >= 0.5;
  }
}