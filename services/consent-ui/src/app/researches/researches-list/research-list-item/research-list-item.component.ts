import { Component, OnInit, Input } from '@angular/core';
import { Research } from 'src/app/models/research';

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
    this.createFinishString();
  }

  createFinishString() {
    const endDateString = this.research.endDate.toLocaleDateString('nl')

    // Finishes today
    if (endDateString === new Date().toLocaleDateString('nl'))
      this.finishString = `Finishes: today at ${endDateString}`
    // Already finished
    else if (this.research.endDate.getTime() < new Date().getTime())
      this.finishString = `Finished: ${endDateString}`
    else
      this.finishString = `Finishes: ${endDateString}`
  }

  createStartedString() {
    const startDateString = this.research.startDate.toLocaleDateString('nl')

    // Starts today
    if (startDateString === new Date().toLocaleDateString('nl'))
      this.startString = `Starts: today at ${startDateString}`
    // Already started
    else if (this.research.startDate.getTime() < new Date().getTime())
      this.startString = `Started: ${startDateString}`
    else
      this.startString = `Starts: ${startDateString}`
  }

}
