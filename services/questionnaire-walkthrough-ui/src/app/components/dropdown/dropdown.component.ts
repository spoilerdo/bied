import { Component, OnInit, Input } from '@angular/core';
import { QuestionOptions } from 'src/app/models/question-options/question-options.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() public question: any;
  @Input() public answer: any;
  @Input() public information: string;
  @Input() public options?: QuestionOptions[];

  constructor() {}

  ngOnInit(): void {}

  setAnswer(event) {
    this.answer = event;
    // this.submitAnswer();
  }
}
