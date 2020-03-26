import { Component, OnInit, Input } from '@angular/core';
import { QuestionOptions } from 'src/app/models/question-options/question-options.model';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent extends BiedQuestionComponent implements OnInit {
  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
