import { Component, OnInit } from '@angular/core';
import { QuestionTypeDecorator } from 'src/app/decorators/question-type.decorator';
import { QuestionType } from 'src/app/enums/question-type.enum';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
@QuestionTypeDecorator(QuestionType.DATE)
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
