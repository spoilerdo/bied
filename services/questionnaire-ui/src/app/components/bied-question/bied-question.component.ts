import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { QuestionOptions } from 'src/app/models/question-options/question-options.model';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { ANSWER_QUESTION } from 'src/app/store/questionnaire.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bied-question',
  templateUrl: './bied-question.component.html',
  styleUrls: ['./bied-question.component.scss'],
})
export class BiedQuestionComponent implements OnInit {
  @Input() public id: string;
  @Input() public type: QuestionType;
  @Input() public information: string;
  @Input() public parentForm: FormGroup;
  @Input() public question: any;
  @Input() public options?: QuestionOptions[];
  @Input() public answer: any;

  @HostBinding('style.display')
  public display: string = 'flex';

  @HostBinding('style.flex')
  public flex: number = 1;

  public choosedOptions: any = [];

  private index: number;

  constructor(public questionnaireReducers: QuestionnaireReducers) {}

  ngOnInit(): void {}

  submitAnswer() {
    if (this.getQuestionType() === QuestionType.LIKERT) {
      ((this.parentForm.controls.likertQuestions as FormGroup).controls[this.index] as FormGroup).controls.answer.setValue(this.answer);
    } else {
      this.parentForm.controls.answer.setValue(this.answer);
    }
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
    this.index = index;
    this.answer = event;
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
