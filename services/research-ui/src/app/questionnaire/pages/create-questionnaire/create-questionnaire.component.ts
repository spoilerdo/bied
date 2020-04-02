import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
    const { controls } = this.questions;
    const id = controls[controls.length - 1] ? controls[controls.length - 1].value.id + 1 : 0;
    this.questions.push(this.formBuilder.group({ id }));
  }

  onQuestionnaireSubmit() {
    console.log(this.f);
  }

  onRemoveQuestion(id: number) {
    const questionToRemove = this.questions.controls.find(question => question.value.id === id);
    const questionIndex = this.questions.controls.indexOf(questionToRemove);
    this.questions.removeAt(questionIndex);
  }

  get f() {
    return this.questionnaireForm.controls;
  }

  get questions(): FormArray {
    return this.f.questions as FormArray;
  }
}
