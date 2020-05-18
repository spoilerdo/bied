import { Component, OnInit, Input } from '@angular/core';
import { Research } from 'src/app/models/research';
import { getEndString, getStartString } from 'src/app/utilities';

@Component({
  selector: 'app-research-list-item',
  templateUrl: './research-list-item.component.html',
  styleUrls: ['./research-list-item.component.scss']
})
export class ResearchListItemComponent implements OnInit {

  @Input() research: Research;
  finishString: String;
  startString: String;

  constructor() { }

  ngOnInit(): void {    
    this.finishString = getEndString(this.research.endDate);
    this.startString = getStartString(this.research.startDate);
  }
}
