import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consents-list-item',
  templateUrl: './consents-list-item.component.html',
  styleUrls: ['./consents-list-item.component.scss']
})
export class ConsentsListItemComponent implements OnInit {

  @Input() consent: any;

  constructor() { }

  ngOnInit(): void {
  }

}
