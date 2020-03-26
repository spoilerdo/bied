import { Component, OnInit, Input } from '@angular/core';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.scss'],
})
export class NumericComponent extends BiedQuestionComponent implements OnInit {
  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
