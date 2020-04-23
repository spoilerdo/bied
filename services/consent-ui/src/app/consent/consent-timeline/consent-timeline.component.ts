import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consent-timeline',
  templateUrl: './consent-timeline.component.html',
  styleUrls: ['./consent-timeline.component.scss']
})
export class ConsentTimelineComponent implements OnInit {

  green: string = '#a3ff8f';
  red: string = "#ff8284"
  lightGrey: string = 'lightgrey'
  researchStarted: Date = new Date();
  datasourceCreated: Date = new Date();
  givenDate: Date = new Date();
  reject: Date = new Date();
  reGiven: Date = new Date();

  items: TimelineItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.researchStarted.setDate(this.researchStarted.getDate() - 10);
    this.datasourceCreated.setDate(this.datasourceCreated.getDate() - 8);
    this.givenDate.setDate(this.givenDate.getDate() - 5);
    this.reject.setDate(this.reject.getDate() - 4);
    this.reGiven.setDate(this.reGiven.getDate() - 1);

    this.items = [
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
      },
      {
        header: 'Consent given',
        date: this.givenDate,     
        color: this.green
      },
      {
        header: 'Consent withdrawn',
        date: this.reject,        
        color: this.red
      },
      {
        header: 'Consent re-given',
        date: this.reGiven,        
        color: this.green
      }
    ]
  }
}


class TimelineItem {
  date: Date;
  header: string;
  children?: any;
  color: string;
}