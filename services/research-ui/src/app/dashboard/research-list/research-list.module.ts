import { NgModule } from '@angular/core';
import { ResearchListComponent } from './research-list.component';
import {
  NbCardModule,
  NbListModule,
  NbLayoutModule,
  NbToggleModule,
  NbInputModule,
  NbSelectModule,
} from '@nebular/theme';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { CommonModule } from '@angular/common';
import { ResearchListItemComponent } from './research-list-item/research-list-item.component';
import { ResearchStatusComponent } from './research-status/research-status.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    NbCardModule,
    NbListModule,
    NbLayoutModule,
    NbToggleModule,
    NbInputModule,
    NbSelectModule,
    FormsModule,
  ],
  declarations: [ResearchListComponent, ResearchListItemComponent, ResearchStatusComponent],
  exports: [ResearchListComponent],
})
export class ResearchListModule {}
