import { Component, OnInit, Input } from '@angular/core';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionTypeDecorator } from 'src/app/decorators/question-type.decorator';
import { QuestionType } from 'src/app/enums/question-type.enum';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.scss', '../bied-question/bied-question.component.scss'],
})
@QuestionTypeDecorator(QuestionType.NUMERICAL)
export class NumericComponent extends BiedQuestionComponent implements OnInit {
  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
