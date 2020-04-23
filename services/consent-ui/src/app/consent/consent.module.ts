import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentRoutingModule } from './consent-routing.module';
import { ConsentProvider } from '../providers/consent.provider';
import { ConsentMockProvider } from '../providers/consent.provider.mock';
import { DatasourceProvider } from '../providers/datasource.provider';
import { DatasourceMockProvider } from '../providers/datasource.provider.mock';
import { ConsentDetailsHeaderComponent } from './consent-details-header/consent-details-header.component';
import { ConsentComponent } from './consent.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { ConsentsModule } from '../consents/consents.module';


@NgModule({  
  imports: [
    CommonModule,
    ConsentRoutingModule,
    NbCardModule,
    NbIconModule,
    ConsentsModule
  ],
  declarations: [ConsentComponent, ConsentDetailsHeaderComponent],  
  providers: [
    {
      provide: ConsentProvider,
      useClass: ConsentMockProvider
    },
    {
      provide: DatasourceProvider,
      useClass: DatasourceMockProvider
    }
  ]  
})
export class ConsentModule { }
