import { Datasource } from '../models/datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class DatasourceProvider {
  getDatasourceById(id: string) {
    throw new Error('Method not implemented');
  }

  deleteAllData(userId: string) {
    throw new Error('Method not implemented')
  }

  getDatasources() {
    throw new Error('Method not implemented')
  }
}