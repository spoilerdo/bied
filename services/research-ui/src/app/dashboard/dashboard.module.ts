import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbButtonModule, NbListModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ResearchListComponent } from './research-list/research-list.component';

@NgModule({
  imports: [ThemeModule, CommonModule, NbCardModule, NbButtonModule, NbListModule],
  declarations: [DashboardComponent, HeaderCardComponent, ResearchListComponent],
})
export class DashboardModule {}
