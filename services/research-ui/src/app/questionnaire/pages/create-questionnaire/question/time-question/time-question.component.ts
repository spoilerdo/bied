import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-time-question',
  templateUrl: './time-question.component.html',
  styleUrls: ['./time-question.component.scss'],
})
export class TimeQuestionComponent implements OnInit {
  @Input() questionDataForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.questionDataForm) {
      throw new Error('No form group provided');
    }

    this.questionDataForm.addControl('placeholder', this.formBuilder.control('Time'));
    this.questionDataForm.addControl('min', this.formBuilder.control(null));
    this.questionDataForm.addControl('max', this.formBuilder.control(null));
  }
}
