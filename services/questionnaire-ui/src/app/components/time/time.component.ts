import { Component, OnInit } from '@angular/core';
import { QuestionTypeDecorator } from 'src/app/decorators/question-type.decorator';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { BiedQuestionComponent } from '../bied-question/bied-question.component';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss', '../bied-question/bied-question.component.scss'],
})
@QuestionTypeDecorator(QuestionType.TIME)
export class TimeComponent extends BiedQuestionComponent implements OnInit {
  //Array to show availeble time slots, it's not great, but its something ¯\_(ツ)_/¯
  timeArr: any[] = [
    {
      name: '00:00',
    },
    {
      name: '00:30',
    },
    {
      name: '01:00',
    },
    {
      name: '01:30',
    },
    {
      name: '02:00',
    },
    {
      name: '02:30',
    },
    {
      name: '03:00',
    },
    {
      name: '03:30',
    },
    {
      name: '04:00',
    },
    {
      name: '04:30',
    },
    {
      name: '05:00',
    },
    {
      name: '05:30',
    },
    {
      name: '06:00',
    },
    {
      name: '06:30',
    },
    {
      name: '07:00',
    },
    {
      name: '07:30',
    },
    {
      name: '08:00',
    },
    {
      name: '08:30',
    },
    {
      name: '09:00',
    },
    {
      name: '09:30',
    },
    {
      name: '10:00',
    },
    {
      name: '10:30',
    },
    {
      name: '11:00',
    },
    {
      name: '11:30',
    },
    {
      name: '12:00',
    },
    {
      name: '12:30',
    },
    {
      name: '13:00',
    },
    {
      name: '13:30',
    },
    {
      name: '14:00',
    },
    {
      name: '14:30',
    },
    {
      name: '15:00',
    },
    {
      name: '15:30',
    },
    {
      name: '16:00',
    },
    {
      name: '16:30',
    },
    {
      name: '17:00',
    },
    {
      name: '17:30',
    },
    {
      name: '18:00',
    },
    {
      name: '18:30',
    },
    {
      name: '19:00',
    },
    {
      name: '19:30',
    },
    {
      name: '20:00',
    },
    {
      name: '20:30',
    },
    {
      name: '21:00',
    },
    {
      name: '21:30',
    },
    {
      name: '22:00',
    },
    {
      name: '22:30',
    },
    {
      name: '23:00',
    },
    {
      name: '23:30',
    },
  ];
  constructor(public questionniareReducers: QuestionnaireReducers) {
    super(questionniareReducers);
  }
}
