import { Injectable } from "@angular/core";
import { ConsentProvider } from './consent.provider';
import { Consent } from '../consents/models/consent';

@Injectable()
export class ConsentMockProvider extends ConsentProvider {
  private readonly store: Consent[] = [
    {
      id: '1',
      userId: '1',
      consent: true,
      uts: new Date(),
      datasourceId: '1'
    }, {
      id: '2',
      userId: '1',
      consent: false,
      uts: new Date(),
      datasourceId: '2'
    }
  ];

  getConsentsForUser(userId: string): Consent[] {
    const consents: Consent[] = this.store.filter(x => x.userId === userId);
    consents.map((consent: Consent) => {
      consent.datasource = this.datasourceService.getDatasourceById(consent.datasourceId);
    });
    return consents;
  }

  getConsentById(consentId: string): Consent {
    return this.store.find(x => x.id === consentId);
  }

  deleteAllConsent(userId: string): boolean {
    console.log(`Delete all consent called for user: ${userId}`)
    return Math.random() >= 0.5;
  }
}