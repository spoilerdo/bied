import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-choice-question',
  templateUrl: './choice-question.component.html',
  styleUrls: ['./choice-question.component.scss'],
})
export class ChoiceQuestionComponent implements OnInit {
  @Input() questionDataForm: FormArray;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.questionDataForm) {
      throw new Error('No form group provided');
    }
  }

  /**
   * Adds a new option to the multiple choice data
   */
  addOption(): void {
    this.options.push(this.formBuilder.control(`Option ${this.options.length + 1}`));
  }

  /**
   * An alias for external form array
   */
  get options(): FormArray {
    return this.questionDataForm;
  }
}
