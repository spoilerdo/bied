import { Component, OnInit } from '@angular/core';
import { ResearchProvider } from './research.provider';
import { Research } from './models/research';
import { SortingTypes } from './models/orderTypes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  researches: Research[];
  order: SortingTypes;

  constructor(readonly researchProvider: ResearchProvider) {}

  ngOnInit(): void {
    this.researches = this.researchProvider.getResearches();
    this.order = SortingTypes.ALFAA;
  }

  searchEvent(searchTerm: string) {
    this.researches = this.researchProvider.searchResearch(searchTerm);
    this.researches = this.researchProvider.orderResearch(this.order, this.researches);
  }

  orderEvent(_order: SortingTypes) {
    this.order = _order;
    this.researches = this.researchProvider.orderResearch(_order, this.researches);
  }
}
