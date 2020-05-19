import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent implements OnInit {

  @Input() status: boolean;
  @Input() date: Date;

  constructor() { }

  ngOnInit(): void {
  }

  getDate() {
    if (!this.date) return "Unknown date";
    return this.date.toLocaleString('nl');
  }

}
