import { Component, OnInit, Input } from '@angular/core';
import { Datasource } from 'src/app/models/datasource';
import { DatasourceProvider } from 'src/app/providers/datasource.provider';
import { ResearchProvider } from 'src/app/providers/research.provider';

@Component({
  selector: 'app-datasources-list',
  templateUrl: './datasources-list.component.html',
  styleUrls: ['./datasources-list.component.scss']
})
export class DatasourcesListComponent implements OnInit {
  @Input() researchId: string;

  datasources: Datasource[];

  constructor(private readonly datasourceService: DatasourceProvider, private readonly researchService: ResearchProvider) { }

  ngOnInit(): void {
    this.datasources = this.researchId ? this.researchService.getResearchById('1').datasources : this.datasourceService.getDatasources();
    console.log("Datasources-list component, datasources", this.datasources)
  }
}
