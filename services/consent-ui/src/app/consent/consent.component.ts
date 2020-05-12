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

  // TODO maybe a service for the timeline items
  green: string = '#a3ff8f';
  red: string = "#ff8284"
  lightGrey: string = 'lightgrey'
  researchStarted: Date = new Date();
  datasourceCreated: Date = new Date();
  items = [
    {
      header: 'Research started',
      date: this.researchStarted,
      color: this.lightGrey
    },
    {
      header: 'Datasource created',
      date: this.datasourceCreated,
      color: this.lightGrey
    },
    {
      header: 'Datasource started',
      date: this.datasourceCreated,
      color: this.lightGrey
    }
  ]

  @Input() id: string;
  consent: Consent;

  constructor(private route: ActivatedRoute, private readonly consentService: ConsentProvider, private readonly datasourceService: DatasourceProvider) { }

  ngOnInit(): void {
    this.researchStarted.setDate(this.researchStarted.getDate() - 10);
    this.datasourceCreated.setDate(this.datasourceCreated.getDate() - 8);

    this.route.params.subscribe(params => {      
      this.id = params['id'];
      this.consent = this.consentService.getConsentById(this.id);
      this.consent.datasource = this.datasourceService.getDatasourceById(this.consent.datasourceId)

      if (this.consent.consent) {
        this.items.push({
          header: this.consent.consent ? `Consent given` : 'Consent rejected',
          date: this.consent.uts,
          color: this.consent.consent ? this.green : this.red
        })     
        this.items = this.items.sort((a,b)=>a.date.getTime()-b.date.getTime()).reverse();   
      }     
    })
  }

  switchConsent() {
    this.consent.consent = !this.consent.consent;
    this.consent.uts = new Date();

    if (this.consent.consent)
      this.items.push({ header: 'Consent given', date: new Date(), color: this.green })
    else
      this.items.push({ header: 'Consent withdrawn', date: new Date(), color: this.red })

    this.items = this.items.sort((a,b)=>a.date.getTime()-b.date.getTime()).reverse();   
  }
}
