import { Datasource } from '../models/datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class DatasourceProvider {
  getDatasourceById(id: string): Datasource {
    throw new Error('Method not implemented');
  }

  deleteAllData(userId: string): boolean {
    throw new Error('Method not implemented')
  }

  getDatasources(): Datasource[] {
    throw new Error('Method not implemented')
  }
}