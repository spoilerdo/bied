import { Component, OnInit } from '@angular/core';
import { Consent } from '../models/consent';
import { ConsentProvider } from '../../providers/consent.provider';

@Component({
  selector: 'app-consents-list',
  templateUrl: './consents-list.component.html',
  styleUrls: ['./consents-list.component.scss']
})
export class ConsentsListComponent implements OnInit {
  consents: Consent[] = [];  

  constructor(readonly consentService: ConsentProvider) { }

  ngOnInit(): void {
    this.consents = this.consentService.getConsentsForUser('1')
  }

}
