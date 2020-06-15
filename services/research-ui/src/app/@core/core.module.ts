import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbIconModule } from '@nebular/theme';
import { NgxPaginationModule } from 'ngx-pagination';

const nebularModules = [NbLayoutModule, NbIconModule];

@NgModule({
  declarations: [EnumToArrayPipe],
  imports: [CommonModule, NgxPaginationModule, ...nebularModules],
  exports: [EnumToArrayPipe],
})
export class CoreModule {}
