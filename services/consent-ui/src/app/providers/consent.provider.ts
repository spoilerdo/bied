import { Injectable } from "@angular/core";
import { Consent } from '../models/consent';
import { DatasourceProvider } from './datasource.provider';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsentProvider {
  constructor(readonly datasourceService: DatasourceProvider, private http: HttpClient) {}

  getConsentsForUser(userId: string) {
    return this.http.get(`http://192.168.39.179:30027/api/consent/all/af6748fd-f595-4ae9-9df5-a21323b78546`);
  }

  getConsentById(consentId: string) {
    return this.http.get(`http://192.168.39.179:30027/api/consent/${consentId}`);
  }

  getUserConsentForDatasource(userId: String, datasourceId: String) {
    return this.http.post(`http://192.168.39.179:30027/api/consent/datasource`, {userId, datasourceId});
  }

  deleteAllConsent(userId: string) {
    return this.http.delete(`http://192.168.39.179:30027/api/consent/all/${userId}`)
  }
}