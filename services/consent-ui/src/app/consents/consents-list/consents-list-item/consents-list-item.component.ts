import { Component, OnInit, Input } from '@angular/core';
import { Consent } from '../../models/consent';

@Component({
  selector: 'app-consents-list-item',
  templateUrl: './consents-list-item.component.html',
  styleUrls: ['./consents-list-item.component.scss']
})
export class ConsentsListItemComponent implements OnInit {

  @Input() consent: Consent;

  constructor() { }

  ngOnInit(): void {
  }

}
