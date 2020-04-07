import { Component, OnInit, AfterViewInit } from '@angular/core';
import { QuestionTypeDecorator } from 'src/app/decorators/question-type.decorator';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss', '../bied-question/bied-question.component.scss']
})
@QuestionTypeDecorator(QuestionType.DATE)
export class DateComponent extends BiedQuestionComponent implements AfterViewInit {
  formControl = new FormControl();

  constructor(public questionnaireReducers: QuestionnaireReducers) {
    super(questionnaireReducers);
  }

  ngAfterViewInit(): void {
    if(this.answer) {
      this.formControl = new FormControl(this.answer);
    }
  }

}
