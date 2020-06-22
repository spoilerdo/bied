import { Injectable } from "@angular/core";
import { Research } from '../models/research';
import { DatasourceProvider } from './datasource.provider';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResearchProvider {
  constructor(readonly datasourceService: DatasourceProvider, private http: HttpClient) {}  
  getResearchById(id: string) {
    return this.http.get(`http://192.168.39.179:30027/api/research/${id}`);
  }

  getResearches() {
    return this.http.get(`http://192.168.39.179:30027/api/research`)
  }
}