import { Component, OnInit } from '@angular/core';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { QuestionTypeDecorator } from 'src/app/decorators/question-type.decorator';
import { QuestionType } from 'src/app/enums/question-type.enum';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss', '../bied-question/bied-question.component.scss'],
})
@QuestionTypeDecorator(QuestionType.MULTIPLE_CHOICE)
export class MultipleChoiceComponent extends BiedQuestionComponent implements OnInit {
  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
