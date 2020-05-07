import { Component, OnInit } from '@angular/core';
import { Research } from 'src/app/models/research';
import { ResearchProvider } from 'src/app/providers/research.provider';

@Component({
  selector: 'app-researches-list',
  templateUrl: './researches-list.component.html',
  styleUrls: ['./researches-list.component.scss']
})
export class ResearchesListComponent implements OnInit {

  researches: Research[] = [];

  constructor(private readonly researchService: ResearchProvider) { }

  ngOnInit(): void {
    this.researches = this.researchService.getResearches();
  }

}
