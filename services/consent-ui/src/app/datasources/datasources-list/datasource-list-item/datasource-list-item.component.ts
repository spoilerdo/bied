import { Component, OnInit, Input } from '@angular/core';
import { Datasource } from 'src/app/models/datasource';
import { ConsentProvider } from 'src/app/providers/consent.provider';
import { Consent } from 'src/app/models/consent';

@Component({
  selector: 'app-datasource-list-item',
  templateUrl: './datasource-list-item.component.html',
  styleUrls: ['./datasource-list-item.component.scss']
})
export class DatasourceListItemComponent implements OnInit {
  @Input() datasource: Datasource;
  consent: Consent;

  constructor(private readonly consentService: ConsentProvider) { }

  ngOnInit(): void {
    this.consentService.getUserConsentForDatasource('1', this.datasource.id).subscribe(data => this.consent = data as Consent);
  }

  getDateString() {
    try {
      return this.consent.uts.toLocaleDateString('nl');
    } catch (err) { 
      return '-'
    }
  }
}
