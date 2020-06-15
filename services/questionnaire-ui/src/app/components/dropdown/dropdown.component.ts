import { Component, OnInit } from '@angular/core';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { QuestionTypeDecorator } from 'src/app/decorators/question-type.decorator';
import { QuestionType } from 'src/app/enums/question-type.enum';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss', '../bied-question/bied-question.component.scss'],
})
@QuestionTypeDecorator(QuestionType.DROPDOWN)
export class DropdownComponent extends BiedQuestionComponent implements OnInit {
  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }
}
