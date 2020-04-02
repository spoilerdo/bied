import { NgModule } from '@angular/core';
import { ResearchListComponent } from './research-list.component';
import { NbCardModule, NbListModule } from '@nebular/theme';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { CommonModule } from '@angular/common';
import { ResearchListItemComponent } from './research-list-item/research-list-item.component';
import { ResearchStatusComponent } from './research-status/research-status.component';

@NgModule({
  imports: [ThemeModule, CommonModule, NbCardModule, NbListModule],
  declarations: [ResearchListComponent, ResearchListItemComponent, ResearchStatusComponent],
  exports: [ResearchListComponent],
})
export class ResearchListModule {}
