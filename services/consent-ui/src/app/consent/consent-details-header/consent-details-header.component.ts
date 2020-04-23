import { Component, OnInit, Input } from '@angular/core';
import { Consent } from 'src/app/models/consent';
import { Datasource } from 'src/app/models/datasource';

@Component({
  selector: 'app-consent-details-header',
  templateUrl: './consent-details-header.component.html',
  styleUrls: ['./consent-details-header.component.scss']
})
export class ConsentDetailsHeaderComponent implements OnInit {

  @Input() consent: Consent;

  constructor() { }

  ngOnInit(): void {
  }

}
