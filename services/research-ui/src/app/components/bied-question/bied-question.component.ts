import { Component, OnInit, Input } from '@angular/core';
import { QuestionType } from 'src/app/models/question-type';
import { QuestionAnswer } from 'src/app/models/questionnaire-result';

@Component({
  selector: 'app-bied-question',
  templateUrl: './bied-question.component.html',
  styleUrls: ['./bied-question.component.scss'],
})
export class BiedQuestionComponent implements OnInit {
  @Input() public questionAnswer: QuestionAnswer[];

  constructor() {}

  ngOnInit(): void {}
}
