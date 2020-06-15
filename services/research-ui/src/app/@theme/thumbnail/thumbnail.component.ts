import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-thumbnail',
  styleUrls: ['./thumbnail.component.scss'],
  template: `
  <div class="thumbnail-container">
    <img src="{{ src }}" alt="{{ alt }}" class="thumbnail" />
    </div>
  `,
})
export class ThumbnailComponent {
  @Input() src: string;
  @Input() alt: string;
}
