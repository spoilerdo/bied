import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusIndicatorComponent } from './status-indicator.component';
import { NbTooltipModule, NbPopoverModule, NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [StatusIndicatorComponent],
  imports: [
    CommonModule,
    NbIconModule,
    NbTooltipModule,
    NbPopoverModule
  ],
  exports: [StatusIndicatorComponent]
})
export class StatusIndicatorModule { }
