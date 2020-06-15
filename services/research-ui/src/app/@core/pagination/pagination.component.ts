import { Component, Input } from '@angular/core';
import { PaginationControlsDirective, PaginationControlsComponent } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent extends PaginationControlsComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('paginationData') p: PaginationControlsDirective;

  constructor() {
    super();
  }
}
