import { Component, Input } from '@angular/core';
import { Research } from '../models/research';

@Component({
  selector: 'ngx-research-list',
  styleUrls: ['./research-list.component.scss'],
  templateUrl: './research-list.component.html',
})
export class ResearchListComponent {
  @Input() researches: Research[];
}
