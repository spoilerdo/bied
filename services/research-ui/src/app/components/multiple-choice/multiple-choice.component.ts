import { Component, OnInit } from '@angular/core';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import { QuestionTypeDecorator } from 'src/app/decorators/questiontype.decorator';
import { QuestionType } from 'src/app/models/question-type';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
@QuestionTypeDecorator(QuestionType.MULTIPLE_CHOICE)
export class MultipleChoiceComponent extends BiedQuestionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
