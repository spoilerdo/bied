import { Component, Input } from '@angular/core';
import { ResearchProvider } from '../research.provider';

@Component({
  selector: 'ngx-research-list',
  styleUrls: ['./research-list.component.scss'],
  templateUrl: './research-list.component.html',
})
export class ResearchListComponent {
  constructor(readonly service: ResearchProvider) {}
}
