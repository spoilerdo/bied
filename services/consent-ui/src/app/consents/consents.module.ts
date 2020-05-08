import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentsComponent } from './consents.component';
import { NbCardModule, NbListModule, NbIconModule, NbTooltipComponent, NbTooltipModule, NbPopoverModule } from '@nebular/theme';
import { ConsentsListComponent } from './consents-list/consents-list.component';
import { ConsentsListItemComponent } from './consents-list/consents-list-item/consents-list-item.component';
import { ConsentProvider } from '../providers/consent.provider';
import { ConsentMockProvider } from '../providers/consent.provider.mock';
import { DatasourceProvider } from '../providers/datasource.provider';
import { DatasourceMockProvider } from '../providers/datasource.provider.mock';
import { StatusIndicatorModule } from '../status-indicator/status-indicator.module';



@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,   
    NbPopoverModule,
    StatusIndicatorModule
  ],
  declarations: [ConsentsComponent, ConsentsListComponent, ConsentsListItemComponent],  
  exports: [ConsentsComponent],
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
export class ConsentsModule { }
