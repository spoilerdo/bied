import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { Research } from '../models/research';
import { SortingTypes } from '../models/sortingTypes';

@Component({
  selector: 'ngx-research-list',
  styleUrls: ['./research-list.component.scss'],
  templateUrl: './research-list.component.html',
})
export class ResearchListComponent {
  @Input() researches: Research[];
  @Output() searchEvent = new EventEmitter();
  @Output() orderEvent = new EventEmitter();

  Filtering: boolean = false;
  selectedFilter: number = 0;
  searchValue: string = '';
  orderType = SortingTypes;

  selectedOrderChange(order: SortingTypes) {
    this.orderEvent.emit(order);
  }

  searchValueEmitter(value: string) {
    this.searchEvent.emit(value);
  }
}
