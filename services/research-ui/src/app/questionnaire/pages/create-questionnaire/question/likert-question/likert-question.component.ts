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
    const rowsLength = this.rows.length;
    if (rowsLength - 1 >= index) {
      this.rows.removeAt(index);
    } else {
      throw new Error('Index out of bounds');
    }
  }

  addColumn(): void {
    this.columns.push(this.formBuilder.control(`Column ${this.columns.length + 1}`));
  }

  removeColumn(index: number): void {
    const columnsLength = this.columns.length;
    if (columnsLength - 1 >= index) {
      this.columns.removeAt(index);
    } else {
      throw new Error('Index out of bounds');
    }
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
