import { Component, Input } from '@angular/core';
import { Research } from '../../models/research.model';

@Component({
  selector: 'research-list-item',
  styleUrls: ['./research-list-item.component.scss'],
  templateUrl: './research-list-item.component.html',
})
export class ResearchListItemComponent {
  @Input() research: Research;
}
