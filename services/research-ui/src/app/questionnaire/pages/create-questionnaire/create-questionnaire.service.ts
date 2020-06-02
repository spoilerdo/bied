import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { NbViewportRulerAdapter } from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class CreateQuestionnaireService {
  public selectedQuestionGroupID: number;
  public questionnaireForm: FormGroup;
  public actionBarOffsetBase: number;
  private ActionBarOffset: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private readonly viewportRulerAdapter: NbViewportRulerAdapter,
    private readonly formBuilder: FormBuilder,
  ) {}

  public addQuestion(): void {
    const questionGroups = this.questionnaireForm.controls.questionGroups as FormArray;
    const selectedQuestionGroup = questionGroups.controls.find(
      (group) => group.value.id === this.selectedQuestionGroupID,
    ) as FormGroup;
    const questions = selectedQuestionGroup.controls.questions as FormArray;
    const { controls } = questions;
    const id = controls[controls.length - 1] ? controls[controls.length - 1].value.id + 1 : 0;
    questions.push(
      this.formBuilder.group({
        id,
        questionGroupID: selectedQuestionGroup.controls.id,
        label: ['', [Validators.required]],
        required: false,
        questionType: [null, [Validators.required]],
        questionData: [{}, [Validators.required]],
      }),
    );
  }

  public addQuestionGroup(): void {
    const questionGroups = this.questionnaireForm.controls.questionGroups as FormArray;
    const { controls } = questionGroups;
    const id = controls[controls.length - 1] ? controls[controls.length - 1].value.id + 1 : 0;
    questionGroups.push(
      this.formBuilder.group({
        id,
        title: ['', [Validators.required, Validators.maxLength(255)]],
        description: ['', [Validators.maxLength(1000)]],
        questions: this.formBuilder.array([]),
      }),
    );
  }

  get $actionBarOffset(): Observable<number> {
    return this.ActionBarOffset.asObservable();
  }

  set actionBarOffset(offset: number) {
    const scrollPosition = this.viewportRulerAdapter.getViewportScrollPosition().top;
    const actionBarOffset =
      offset < this.actionBarOffsetBase ? 0.1 : offset - this.actionBarOffsetBase + scrollPosition - 13.9;
    console.log(actionBarOffset);
    this.ActionBarOffset.next(actionBarOffset);
  }
}
