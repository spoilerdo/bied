import { Datasource } from '../consents/models/datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class DatasourceProvider {
  getDatasourceById(id: string): Datasource {
    throw new Error('Method not implemented');
  }
}