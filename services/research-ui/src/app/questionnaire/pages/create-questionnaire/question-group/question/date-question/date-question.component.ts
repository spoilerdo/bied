import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-question',
  templateUrl: './date-question.component.html',
  styleUrls: ['./date-question.component.scss'],
})
export class DateQuestionComponent implements OnInit {
  @Input() questionDataForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.questionDataForm) {
      throw new Error('No form group provided');
    }

    this.questionDataForm.addControl('placeholder', this.formBuilder.control('Date'));
    this.questionDataForm.addControl('min', this.formBuilder.control(null));
    this.questionDataForm.addControl('max', this.formBuilder.control(null));
    this.questionDataForm.setValidators(this.dateLessThan('min', 'max'));
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const f = group.controls[from];
      const t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: 'Date from should be less than Date to',
        };
      }
      return {};
    };
  }
}
