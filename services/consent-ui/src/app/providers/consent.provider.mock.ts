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
      datasource: '1'
    }, {
      id: '2',
      userId: '1',
      consent: false,
      uts: new Date(),
      datasource: '2'
    }
  ];

  getConsentsForUser(userId: string): Consent[] {
    const consents: Consent[] = this.store.filter(x => x.userId === userId);
    consents.map((consent: Consent) => {
      if (typeof consent.datasource === "string")
        consent.datasource = this.datasourceService.getDatasourceById(consent.datasource);
    });
    return consents;
  }
}