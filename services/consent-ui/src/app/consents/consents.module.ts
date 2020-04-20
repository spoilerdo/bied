import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentsComponent } from './consents.component';
import { NbCardModule, NbListModule, NbIconModule, NbTooltipComponent, NbTooltipModule, NbPopoverModule } from '@nebular/theme';
import { ConsentsListComponent } from './consents-list/consents-list.component';
import { ConsentsListItemComponent } from './consents-list/consents-list-item/consents-list-item.component';
import { StatusIndicatorComponent } from './consents-list/consents-list-item/status-indicator/status-indicator.component';



@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
    NbPopoverModule
  ],
  declarations: [ConsentsComponent, ConsentsListComponent, ConsentsListItemComponent, StatusIndicatorComponent],  
  exports: [ConsentsComponent]
})
export class ConsentsModule { }
