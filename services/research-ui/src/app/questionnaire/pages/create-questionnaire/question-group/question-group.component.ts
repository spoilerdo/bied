import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss'],
})
export class QuestionGroupComponent implements OnInit {
  @Input() questionGroupForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}



  onRemoveQuestion(id: number) {
    const questionToRemove = this.questions.controls.find((question) => question.value.id === id);
    const questionIndex = this.questions.controls.indexOf(questionToRemove);
    this.questions.removeAt(questionIndex);
  }

  get f() {
    return this.questionGroupForm.controls;
  }

  get questions(): FormArray {
    return this.f.questions as FormArray;
  }
}
