import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CreateQuestionnaireService } from './create-questionnaire.service';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.scss'],
})
export class CreateQuestionnaireComponent implements OnInit {
  constructor(
    public readonly createQuestionnaireService: CreateQuestionnaireService,
    private readonly formBuilder: FormBuilder,
    public readonly ref: ElementRef,
  ) {}

  ngOnInit(): void {
    this.createQuestionnaireService.questionnaireForm = this.formBuilder.group({
      title: '',
      description: '',
      questionGroups: this.formBuilder.array([]),
    });
    this.createQuestionnaireService.addQuestionGroup();
    this.createQuestionnaireService.selectedQuestionGroupID = 0;
    this.createQuestionnaireService.actionBarOffsetBase = this.ref.nativeElement.getBoundingClientRect().top;
    this.createQuestionnaireService.actionBarOffset = -14;
  }

  saveQuestionnaire() {
    console.log(this.f);
  }

  get f() {
    return this.createQuestionnaireService.questionnaireForm.controls;
  }

  get questionGroups(): FormArray {
    return this.f.questionGroups as FormArray;
  }
}
