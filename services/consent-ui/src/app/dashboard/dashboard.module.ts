import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, NbLayoutModule],
})
export class DashboardModule {}
