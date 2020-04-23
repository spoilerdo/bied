import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consent } from '../models/consent';
import { ConsentProvider } from '../providers/consent.provider';
import { DatasourceProvider } from '../providers/datasource.provider';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {

  id: string;
  consent: Consent;

  constructor(private route: ActivatedRoute, private readonly consentService: ConsentProvider, private readonly datasourceService: DatasourceProvider) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.consent = this.consentService.getConsentById(this.id);
      this.consent.datasource = this.datasourceService.getDatasourceById(this.consent.datasourceId)
      console.log(this.consent)
    })
  }

}
