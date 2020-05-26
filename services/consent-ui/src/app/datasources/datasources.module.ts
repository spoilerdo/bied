import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourcesListComponent } from './datasources-list/datasources-list.component';
import { DatasourceListItemComponent } from './datasources-list/datasource-list-item/datasource-list-item.component';
import { NbListModule, NbLayoutModule } from '@nebular/theme';
import { DatasourceProvider } from '../providers/datasource.provider';
import { DatasourceMockProvider } from '../providers/datasource.provider.mock';
import { ConsentProvider } from '../providers/consent.provider';
import { ConsentMockProvider } from '../providers/consent.provider.mock';
import { ConsentModule } from '../consent/consent.module';
import { StatusIndicatorModule } from '../status-indicator/status-indicator.module';

@NgModule({
  declarations: [DatasourcesListComponent, DatasourceListItemComponent],
  imports: [
    CommonModule,
    NbListModule,
    ConsentModule,
    NbLayoutModule,
    StatusIndicatorModule
  ],
  providers: [
    {
      provide: DatasourceProvider,
      useClass: DatasourceMockProvider
    },
    {
      provide: ConsentProvider,
      useClass: ConsentMockProvider
    }
  ],
  exports: [DatasourcesListComponent, DatasourceListItemComponent]
})
export class DatasourcesModule { }
