import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { NbLayoutModule, NbIconModule } from '@nebular/theme';
import { NgxPaginationModule } from 'ngx-pagination';

const nebularModules = [NbLayoutModule, NbIconModule];

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, NgxPaginationModule, ...nebularModules],
})
export class CoreModule {}
