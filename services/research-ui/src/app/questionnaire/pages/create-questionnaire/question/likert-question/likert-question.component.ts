import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-likert-question',
  templateUrl: './likert-question.component.html',
  styleUrls: ['./likert-question.component.scss'],
})
export class LikertQuestionComponent implements OnInit {
  @Input() questionDataForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.questionDataForm.addControl('rows', this.formBuilder.array([]));
    this.questionDataForm.addControl('columns', this.formBuilder.array([]));
  }

  addRow(): void {
    this.rows.push(this.formBuilder.control(`Row ${this.rows.length + 1}`));
  }

  removeRow(index: number): void {
    this.rows.removeAt(index);
  }

  addColumn(): void {
    this.columns.push(this.formBuilder.control(`Column ${this.columns.length + 1}`));
  }

  removeColumn(index: number): void {
    this.columns.removeAt(index);
  }

  get f() {
    return this.questionDataForm.controls;
  }

  get rows(): FormArray {
    return this.f.rows as FormArray;
  }

  get columns(): FormArray {
    return this.f.columns as FormArray;
  }
}
