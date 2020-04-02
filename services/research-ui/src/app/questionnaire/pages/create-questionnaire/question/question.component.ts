import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from '../enums/question-type.enum';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() questionForm: FormGroup;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  questionTypes = QuestionType;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.questionForm) {
      throw new Error('No question form provided');
    }

    this.questionForm.addControl('label', this.formBuilder.control('Question'));
    this.questionForm.addControl('required', this.formBuilder.control(false));
    this.questionForm.addControl('questionType', this.formBuilder.control([null, [Validators.required]]));
    this.questionForm.addControl('questionData', this.formBuilder.group({}));
  }

  formTypeChanged(): void {
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
