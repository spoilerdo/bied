import { Component, Input, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ngx-research-status',
  styleUrls: ['./research-status.component.scss'],
  templateUrl: './research-status.component.html',
})
export class ResearchStatusComponent {
  @Input() startDate: Date;
  @Input() endDate: Date;
  statusText = 'loading...';
  statusColor = 'hint';

  ngOnChanges(changes: SimpleChanges) {
    const now = moment();
    const start = moment(this.startDate);
    const end = moment(this.endDate);

    // If upcoming
    if (now < start) {
      const fromNow = start.fromNow();
      this.statusText = `Start ${fromNow}`;
      this.statusColor = 'info';
    }

    // If active
    if (now > start && now < end) {
      const daysLeft = end.diff(now, 'days');
      const fromNow = end.fromNow();
      this.statusText = `Eindigt ${fromNow}`;

      if (daysLeft > 3) {
        this.statusColor = 'success';
      } else {
        this.statusColor = 'warning';
      }
    }

    // If ended
    if (now > end) {
      const fromNow = end.fromNow();
      this.statusText = `${fromNow} beëindigt`;
      this.statusColor = 'danger';
    }
  }
}
