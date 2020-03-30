import { Component, OnInit, HostBinding } from '@angular/core';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { QuestionTypeDecorator } from 'src/app/decorators/question-type.decorator';
import { QuestionType } from 'src/app/enums/question-type.enum';

@Component({
  selector: 'app-likert',
  templateUrl: './likert.component.html',
  styleUrls: ['./likert.component.scss', '../bied-question/bied-question.component.scss'],
})
@QuestionTypeDecorator(QuestionType.LIKERT)
export class LikertComponent extends BiedQuestionComponent implements OnInit {
  @HostBinding('style.flex-direction')
  public direction: string = 'column';

  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
