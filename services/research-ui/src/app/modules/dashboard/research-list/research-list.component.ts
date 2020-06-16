import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Research } from '../../../@core/models/research';
import { SortingTypes } from '../../../@core/models/sortingTypes';

@Component({
  selector: 'ngx-research-list',
  styleUrls: ['./research-list.component.scss'],
  templateUrl: './research-list.component.html',
})
export class ResearchListComponent {
  @Input() researches: Research[];
  @Output() searchEvent = new EventEmitter();
  @Output() orderEvent = new EventEmitter();

  Filtering = false;
  selectedFilter = 0;
  searchValue = '';
  orderType = SortingTypes;

  selectedOrderChange(order: SortingTypes) {
    this.orderEvent.emit(order);
  }

  searchValueEmitter(value: string) {
    this.searchEvent.emit(value);
  }
}
