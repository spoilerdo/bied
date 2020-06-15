import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ResearchListModule } from './research-list/research-list.module';

@NgModule({
  imports: [ThemeModule, CommonModule, NbCardModule, NbButtonModule, NbIconModule, ResearchListModule],
  providers: [],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
