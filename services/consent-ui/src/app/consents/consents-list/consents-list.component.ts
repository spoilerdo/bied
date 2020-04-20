import { Component, OnInit } from '@angular/core';
import { Consent } from '../models/consent';

@Component({
  selector: 'app-consents-list',
  templateUrl: './consents-list.component.html',
  styleUrls: ['./consents-list.component.scss']
})
export class ConsentsListComponent implements OnInit {
  consents: Consent[] = [
    {
      id: '1',
      userId: '1',
      consent: true,
      uts: new Date(),
      datasource: {
        id: '1',
        name: 'Twitter data',
        description: "Fetches information about the tweets you make on twitter",
        reference: "1",
        active: true
      }
    }, {
      id: '2',
      userId: '1',
      consent: false,
      uts: new Date(),
      datasource: {
        id: '1',
        name: 'Facebook data',
        description: "Fetches information about the posts you make on facebook",
        reference: "1",
        active: false
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
