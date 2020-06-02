import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionType } from '../../enums/question-type.enum';
import { CreateQuestionnaireService } from '../../create-questionnaire.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() questionForm: FormGroup;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  questionTypes = QuestionType;

  constructor(
    private readonly createQuestionnaireService: CreateQuestionnaireService,
    private readonly formBuilder: FormBuilder,
    public readonly ref: ElementRef,
  ) {}

  questionClick() {
    this.createQuestionnaireService.actionBarOffset = this.ref.nativeElement.getBoundingClientRect().top;
    this.createQuestionnaireService.selectedQuestionGroupID = this.f.questionGroupID.value;
  }

  formTypeChanged(): void {
    // Reset the question data when the question type changess
    this.questionForm.removeControl('questionData');
    this.questionForm.addControl('questionData', this.formBuilder.group({}));
  }

  removeQuestion() {
    this.remove.emit(this.f.id.value);
  }

  get f() {
    return this.questionForm.controls;
  }
}
