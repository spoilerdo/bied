import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionType } from '../enums/question-type.enum';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() questionForm: FormGroup;

  questionTypes = QuestionType;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.questionForm) {
      throw new Error('No question form provided');
    }

    this.questionForm.addControl('label', this.formBuilder.control('Question'));
    this.questionForm.addControl('required', this.formBuilder.control(false));
    this.questionForm.addControl('questionType', this.formBuilder.control(QuestionType.Choice));
    this.questionForm.addControl('questionData', this.formBuilder.group({}));
  }

  get f() {
    return this.questionForm.controls;
  }
}
