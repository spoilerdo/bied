import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-choice-question',
  templateUrl: './choice-question.component.html',
  styleUrls: ['./choice-question.component.scss'],
})
export class ChoiceQuestionComponent implements OnInit {
  @Input() questionDataForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.questionDataForm) {
      throw new Error('No form group provided');
    }

    this.questionDataForm.addControl('multi', this.formBuilder.control(false));
    this.questionDataForm.addControl('options', this.formBuilder.array([]));

    // Set 1 default option
    if (this.f.options.value.length < 1) {
      this.addOption();
    }
  }

  /**
   * Adds a new option to the multiple choice data
   */
  addOption(): void {
    this.options.push(
      this.formBuilder.group({
        label: `Option ${this.options.length + 1}`,
        value: `option${this.options.length + 1}`,
      }),
    );
  }

  /**
   * Removes an option form the form
   */
  removeOption(index: number): void {
    this.options.removeAt(index);
  }

  /**
   * Returns the form controls
   */
  get f() {
    return this.questionDataForm.controls;
  }

  /**
   * An alias for external form array
   */
  get options(): FormArray {
    return this.f.options as FormArray;
  }
}
