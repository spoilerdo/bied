import { Component, OnInit } from '@angular/core';
import { ResearchProvider } from './research.provider';
import { Research } from './models/research';
import { OrderTypes } from './models/orderTypes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  researches: Research[];

  constructor(readonly researchProvider: ResearchProvider) {}

  ngOnInit(): void {
    this.researches = this.researchProvider.getResearches();
  }

  searchEvent(searchTerm: string) {
    this.researches = this.researchProvider.searchResearch(searchTerm);
  }

  orderEvent(order: OrderTypes) {
    this.researches = this.researchProvider.orderResearch(order, this.researches);
  }
}
