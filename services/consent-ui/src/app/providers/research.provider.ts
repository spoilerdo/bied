import { Injectable } from "@angular/core";
import { Research } from '../models/research';
import { DatasourceProvider } from './datasource.provider';

@Injectable()
export class ResearchProvider {
  constructor(readonly datasourceService: DatasourceProvider) {}  
  getResearchById(id: string): Research {
    throw new Error(`Method not implemented`);
  }
}