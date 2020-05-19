import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CreateQuestionnaireService } from './create-questionnaire.service';
import { NbViewportRulerAdapter } from '@nebular/theme';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.scss'],
})
export class CreateQuestionnaireComponent implements OnInit {
  constructor(
    private readonly createQuestionnaireService: CreateQuestionnaireService,
    private readonly formBuilder: FormBuilder,
    public readonly ref: ElementRef,
  ) {}

  ngOnInit(): void {
    this.createQuestionnaireService.questionnaireForm = this.formBuilder.group({
      title: '',
      description: '',
      questions: this.formBuilder.array([]),
    });
    this.createQuestionnaireService.actionBarOffsetBase = this.ref.nativeElement.getBoundingClientRect().top;
    this.createQuestionnaireService.actionBarOffset = 0;
  }

  addQuestion(): void {
    const { controls } = this.questions;
    const id = controls[controls.length - 1] ? controls[controls.length - 1].value.id + 1 : 0;
    this.questions.push(this.formBuilder.group({ id }));
  }

  saveQuestionnaire() {
    console.log(this.f);
  }

  onRemoveQuestion(id: number) {
    const questionToRemove = this.questions.controls.find((question) => question.value.id === id);
    const questionIndex = this.questions.controls.indexOf(questionToRemove);
    this.questions.removeAt(questionIndex);
  }

  get f() {
    return this.createQuestionnaireService.questionnaireForm.controls;
  }

  get questions(): FormArray {
    return this.f.questions as FormArray;
  }
}
