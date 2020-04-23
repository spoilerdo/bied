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
import { ConsentTimelineComponent } from './consent-timeline/consent-timeline.component';
import { MglTimelineModule } from 'angular-mgl-timeline';


@NgModule({  
  imports: [
    CommonModule,
    ConsentRoutingModule,
    NbCardModule,
    NbIconModule,
    ConsentsModule,
    MglTimelineModule
  ],
  declarations: [ConsentComponent, ConsentDetailsHeaderComponent, ConsentTimelineComponent],  
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
