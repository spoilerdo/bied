import { Component, OnInit } from '@angular/core';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import { QuestionTypeDecorator } from 'src/app/decorators/questiontype.decorator';
import { QuestionType } from 'src/app/models/question-type';
@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.scss'],
})
@QuestionTypeDecorator(QuestionType.NUMERIC)
export class NumericComponent extends BiedQuestionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
