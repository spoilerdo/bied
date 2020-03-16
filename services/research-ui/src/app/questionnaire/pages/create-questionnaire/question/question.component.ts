import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionType } from '../enums/question-type.enum';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() questionForm: FormGroup;

  questionTypes = QuestionType;

  constructor() {}

  ngOnInit(): void {}

  get f() {
    return this.questionForm.controls;
  }
}
