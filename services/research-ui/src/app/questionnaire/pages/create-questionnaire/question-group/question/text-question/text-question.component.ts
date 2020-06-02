import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss'],
})
export class TextQuestionComponent implements OnInit {
  @Input() questionDataForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.questionDataForm) {
      throw new Error('No form group provided');
    }

    this.questionDataForm.addControl('multiLine', this.formBuilder.control(false));
    this.questionDataForm.addControl('placeholder', this.formBuilder.control(''));
  }

  get f() {
    return this.questionDataForm.controls;
  }

  get multiLine(): boolean {
    return this.f.multiLine.value;
  }
}
