import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionType } from '../enums/question-type.enum';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() questionForm: FormGroup;

  questionTypes = QuestionType;
  required = false;

  get f() {
    return this.questionForm.controls;
  }
}
