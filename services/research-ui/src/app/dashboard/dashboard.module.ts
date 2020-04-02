import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ThemeModule, CommonModule, NbCardModule, NbButtonModule],
  declarations: [DashboardComponent, HeaderCardComponent],
})
export class DashboardModule {}
