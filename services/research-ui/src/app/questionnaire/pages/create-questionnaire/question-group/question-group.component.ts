import { Component, ElementRef, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { CreateQuestionnaireService } from '../create-questionnaire.service';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss'],
})
export class QuestionGroupComponent {
  @Input() questionGroupForm: FormGroup;

  constructor(
    private readonly createQuestionnaireService: CreateQuestionnaireService,
    public readonly ref: ElementRef,
  ) {}

  questionGroupClick(): void {
    this.createQuestionnaireService.selectedQuestionGroupID = this.f.id.value;
    this.createQuestionnaireService.actionBarOffset = this.ref.nativeElement.getBoundingClientRect().top;
  }

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
