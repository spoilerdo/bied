import { Component, OnInit } from '@angular/core';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import { QuestionTypeDecorator } from 'src/app/decorators/questiontype.decorator';
import { QuestionType } from 'src/app/models/question-type';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
@QuestionTypeDecorator(QuestionType.TIME)
export class TimeComponent extends BiedQuestionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
