import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ResearchDetailsComponent } from './research-details.component';

@NgModule({
  imports: [ThemeModule, CommonModule, NbCardModule, NbButtonModule, NbIconModule],
  providers: [],
  declarations: [ResearchDetailsComponent],
})
export class ResearchDetailsModule {}
