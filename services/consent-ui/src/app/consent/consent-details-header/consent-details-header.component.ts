import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Consent } from 'src/app/models/consent';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-consent-details-header',
  templateUrl: './consent-details-header.component.html',
  styleUrls: ['./consent-details-header.component.scss']
})
export class ConsentDetailsHeaderComponent implements OnInit {

  checked: boolean = true;

  @Input() consent: Consent;
  @Output() switchConsent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.checked = this.consent.consent
  }

  switchConsentClicked() {  
    this.switchConsent.emit()
  }

}
