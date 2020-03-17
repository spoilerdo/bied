import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionType } from './enums/question-type.enum';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.scss'],
})
export class CreateQuestionnaireComponent implements OnInit {
  questionnaireForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.questionnaireForm = this.formBuilder.group({
      title: '',
      description: '',
      questions: this.formBuilder.array([]),
    });
  }

  addQuestionnaireItem(): void {
    this.questions.push(this.formBuilder.group({}));
  }

  onQuestionnaireSubmit() {
    console.log(this.f);
  }

  get f() {
    return this.questionnaireForm.controls;
  }

  get questions(): FormArray {
    return this.f.questions as FormArray;
  }
}
