import { Component, OnInit, Input } from '@angular/core';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { QuestionTypeDecorator } from 'src/app/decorators/question-type.decorator';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss', '../bied-question/bied-question.component.scss'],
})
@QuestionTypeDecorator(QuestionType.OPEN_TEXT)
export class TextComponent extends BiedQuestionComponent implements OnInit {
  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
