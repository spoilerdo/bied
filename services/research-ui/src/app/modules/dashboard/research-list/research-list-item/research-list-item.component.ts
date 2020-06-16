import { Component, Input, SimpleChanges } from '@angular/core';
import { Research } from '../../../models/research';
import { UserProvider } from 'src/app/@core/services/user.service';

@Component({
  selector: 'research-list-item',
  styleUrls: ['./research-list-item.component.scss'],
  templateUrl: './research-list-item.component.html',
})
export class ResearchListItemComponent {
  @Input() research: Research;
  ownerName: string;

  constructor(private readonly userService: UserProvider) {}

  async ngOnChanges(changes: SimpleChanges) {
    if ('research' in changes) {
      this.ownerName = await this.userService.getFullnameById(parseInt(this.research.ownerId));
    }
  }
}
