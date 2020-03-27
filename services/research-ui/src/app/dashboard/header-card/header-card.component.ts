import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-header-card',
  styleUrls: ['./header-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container">
        <div class="icon">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
      </div>
    </nb-card>
  `,
})
export class HeaderCardComponent {
  @Input() title: string;
}
