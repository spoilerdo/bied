import { Injectable } from "@angular/core";
import { Consent } from '../models/consent';
import { DatasourceProvider } from './datasource.provider';

@Injectable()
export class ConsentProvider {
  constructor(readonly datasourceService: DatasourceProvider) {}
  getConsentsForUser(userId: string): Consent[] {
    throw new Error(`Method not implemented`)
  }

  getConsentById(consentId: string): Consent {
    throw new Error(`Method not implemented`)
  }

  getUserConsentForDatasource(userId: String, datasourceId: String): Consent {
    throw new Error('Method not implemented')
  }

  deleteAllConsent(userId: string): boolean {
    throw new Error(`Method not implemented`)
  }
}