import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ResearchProvider } from './research.provider';
import { ResearchMockProvider } from './research.provider.mock';
import { ResearchListModule } from './research-list/research-list.module';

@NgModule({
  imports: [ThemeModule, CommonModule, NbCardModule, NbButtonModule, ResearchListModule],
  providers: [
    {
      provide: ResearchProvider,
      useClass: ResearchMockProvider,
    },
  ],
  declarations: [DashboardComponent, HeaderCardComponent],
})
export class DashboardModule {}
