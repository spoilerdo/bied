import { Component, OnInit, Input } from '@angular/core';
import { QuestionOptions } from 'src/app/models/question-options/question-options.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() public question: any;
  @Input() public answer: any;
  @Input() public information: string;
  @Input() public options?: QuestionOptions[];

  constructor() {}

  ngOnInit(): void {}

  public toggle(event: any, index: any) {
    if (event) {
      this.answer.push(this.options[index].name);
    } else {
      this.answer.splice(this.answer.indexOf(this.options[index].name), 1);
    }
    // this.submitAnswer();
  }

  public optionChecked(optionName: string): boolean {
    return this.answer.includes(optionName);
  }

  setAnswer(event) {
    this.answer = event;
    // this.submitAnswer();
  }
}
