import { Component, OnInit, Input } from '@angular/core';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';

@Component({
  selector: 'app-likert-group',
  templateUrl: './likert-group.component.html',
  styleUrls: ['./likert-group.component.scss', '../bied-question/bied-question.component.scss'],
})
export class LikertGroupComponent extends BiedQuestionComponent implements OnInit {
  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
