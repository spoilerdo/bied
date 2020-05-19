import { Component, OnInit } from '@angular/core';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import { QuestionTypeDecorator } from 'src/app/decorators/questiontype.decorator';
import { QuestionType } from 'src/app/models/question-type';
@Component({
  selector: 'app-likert',
  templateUrl: './likert.component.html',
  styleUrls: ['./likert.component.scss'],
})
@QuestionTypeDecorator(QuestionType.LIKERT)
export class LikertComponent extends BiedQuestionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
