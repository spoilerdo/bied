import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-header-card',
  styleUrls: ['./header-card.component.scss'],
  template: `
    <nb-card>
      <div class="details">
        <div class="icon-container">
          <div class="icon">
            <img src="{{ icon }}" alt="" />
          </div>
        </div>
        <div class="title h5">{{ title }}</div>
      </div>
      <div class="button-container">
        <ng-content></ng-content>
      </div>
    </nb-card>
  `,
})
export class HeaderCardComponent {
  @Input() title: string;
  @Input() icon: string;
}
