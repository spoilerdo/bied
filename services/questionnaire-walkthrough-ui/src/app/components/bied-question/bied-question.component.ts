import { Component, OnInit, Input } from '@angular/core';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { QuestionOptions } from 'src/app/models/question-options/question-options.model';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { ANSWER_QUESTION } from 'src/app/store/questionnaire.actions';

@Component({
  selector: 'app-bied-question',
  templateUrl: './bied-question.component.html',
  styleUrls: ['./bied-question.component.scss'],
})
export class BiedQuestionComponent implements OnInit {
  @Input() id: string;
  @Input() type: QuestionType;
  @Input() information: string;
  @Input() question: any;
  @Input() options?: QuestionOptions[];
  public answer: any = '';
  public choosedOptions: any = [];

  constructor(
    private questionnaireReducers: QuestionnaireReducers,
  ) {}

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
      this.choosedOptions.push(index);
    } else {
      this.choosedOptions.splice(this.choosedOptions.indexOf(index), 1);
    }

    this.answer = this.choosedOptions.map(e => this.options[e].name);
    this.submitAnswer();
  }

  public getQuestionType(): string {
    return QuestionType[this.type];
  }
}
