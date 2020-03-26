import { Component, OnInit, Input } from '@angular/core';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { QuestionOptions } from 'src/app/models/question-options/question-options.model';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { ANSWER_QUESTION } from 'src/app/store/questionnaire.actions';

@Component({
  selector: 'app-bied-question',
  templateUrl: './bied-question.component.html',
  styleUrls: ['./bied-question.component.scss'],
})
export class BiedQuestionComponent implements OnInit {
  @Input() public id: string;
  @Input() public type: QuestionType;
  @Input() public information: string;
  @Input() public question: any;
  @Input() public options?: QuestionOptions[];
  @Input() public answer: any;
  public choosedOptions: any = [];

  constructor(public questionnaireReducers: QuestionnaireReducers) {}

  ngOnInit(): void {}

  submitAnswer() {
    this.questionnaireReducers.questionnaireReducer({
      type: ANSWER_QUESTION,
      payload: {
        id: this.id,
        answer: this.answer,
      },
    });
  }

  setAnswer(event) {
    this.answer = event;
    this.submitAnswer();
  }

  setAnswerGroup(event, index) {
    this.question[index].answer = event;
    this.submitAnswer();
  }

  public toggle(event: any, index: any) {
    if (event) {
      this.answer.push(this.options[index].name);
    } else {
      this.answer.splice(this.answer.indexOf(this.options[index].name), 1);
    }
    this.submitAnswer();
  }

  public optionChecked(optionName: string): boolean {
    return this.answer.includes(optionName);
  }

  public getQuestionType(): string {
    return QuestionType[this.type];
  }
}
