import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';

@NgModule({
  declarations: [EnumToArrayPipe],
  imports: [CommonModule],
  exports: [EnumToArrayPipe],
})
export class SharedModule {}
