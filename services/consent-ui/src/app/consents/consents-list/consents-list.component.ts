import { Component, OnInit } from '@angular/core';
import { Consent } from '../../models/consent';
import { ConsentProvider } from '../../providers/consent.provider';
import { DatasourceProvider } from 'src/app/providers/datasource.provider';
import { Datasource } from 'src/app/models/datasource';

@Component({
  selector: 'app-consents-list',
  templateUrl: './consents-list.component.html',
  styleUrls: ['./consents-list.component.scss']
})
export class ConsentsListComponent implements OnInit {
  consents: Consent[] = [];  

  constructor(readonly consentService: ConsentProvider, readonly datasourceService: DatasourceProvider) { }

  ngOnInit(): void {
    console.log('Consents list component ngOnInit, calling getConsentsForUser');
    this.consentService.getConsentsForUser('1').subscribe((result: any) => {
      if (!result.consents)
        this.consents = [];

      // Getting the datasource is something implemented here (mock implementation)
      // Maybe this could be done in the consent api itself.
      result.consents.forEach((consent: any) =>{
        // TODO
        // this.datasourceService.getDatasourceById('571f3537-89f8-493c-8aac-dc9efff5ef82').subscribe(data => {
        //   consent.datasource = data as Datasource;
        // })
      })

      this.consents = result.consents as Consent[];
    })
  }

}
