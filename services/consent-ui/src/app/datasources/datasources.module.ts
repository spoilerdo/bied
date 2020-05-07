import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourcesListComponent } from './datasources-list/datasources-list.component';
import { DatasourceListItemComponent } from './datasources-list/datasource-list-item/datasource-list-item.component';
import { NbListModule } from '@nebular/theme';
import { DatasourceProvider } from '../providers/datasource.provider';
import { DatasourceMockProvider } from '../providers/datasource.provider.mock';



@NgModule({
  declarations: [DatasourcesListComponent, DatasourceListItemComponent],
  imports: [
    CommonModule,
    NbListModule,    
  ],
  providers: [
    {
      provide: DatasourceProvider,
      useClass: DatasourceMockProvider
    }
  ],
  exports: [DatasourcesListComponent, DatasourceListItemComponent]
})
export class DatasourcesModule { }
