import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-consent-timeline',
  templateUrl: './consent-timeline.component.html',
  styleUrls: ['./consent-timeline.component.scss']
})
export class ConsentTimelineComponent implements OnInit {
  @Input() items: TimelineItem[] = []

  constructor() { }

  ngOnInit(): void {    

  }
}


class TimelineItem {
  date: Date;
  header: string;
  children?: any;
  color: string;
}