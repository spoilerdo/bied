import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
