import { ResearchService } from './../../@core/services/research/research.service';
import { Component, OnInit } from '@angular/core';
import { Research } from '../../@core/models/research';
import { SortingTypes } from '../../@core/models/sortingTypes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public researches$: Observable<Research[]>;
  order: SortingTypes;

  constructor(readonly researchService: ResearchService) {}

  ngOnInit(): void {
    this.researches$ = this.researchService.getResearches();
    this.order = SortingTypes.ALFAA;
  }

  searchEvent(searchTerm: string) {
    this.researches$ = this.researchService.searchResearch(searchTerm);
    this.researches$ = this.researchService.orderResearch(this.order);
  }

  orderEvent(_order: SortingTypes) {
    this.order = _order;
    this.researches$ = this.researchService.orderResearch(_order);
  }
}
