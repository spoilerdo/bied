import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchesComponent } from './researches.component';
import { NbCardModule, NbListModule } from '@nebular/theme';
import { ResearchesListComponent } from './researches-list/researches-list.component';
import { ResearchListItemComponent } from './researches-list/research-list-item/research-list-item.component';
import { ResearchProvider } from '../providers/research.provider';
import { ResearchMockProvider } from '../providers/research.provider.mock';
import { DatasourcesListComponent } from '../datasources/datasources-list/datasources-list.component';
import { DatasourcesModule } from '../datasources/datasources.module';



@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,    
    DatasourcesModule  
  ],
  declarations: [ResearchesComponent, ResearchesListComponent, ResearchListItemComponent],
  providers: [
    {
      provide: ResearchProvider,
      useClass: ResearchMockProvider
    }
  ]
})
export class ResearchesModule { }