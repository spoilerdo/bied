import { Component, OnInit } from '@angular/core';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import { QuestionTypeDecorator } from 'src/app/decorators/questiontype.decorator';
import { QuestionType } from 'src/app/models/question-type';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
@QuestionTypeDecorator(QuestionType.DATE)
export class DateComponent extends BiedQuestionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
