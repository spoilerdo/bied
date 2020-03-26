import { Component, OnInit, Input } from '@angular/core';
import { QuestionOptions } from 'src/app/models/question-options/question-options.model';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent extends BiedQuestionComponent implements OnInit {
  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
