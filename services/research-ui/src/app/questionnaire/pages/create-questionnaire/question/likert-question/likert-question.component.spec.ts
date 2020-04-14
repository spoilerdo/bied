import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertQuestionComponent } from './likert-question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NbListModule } from '@nebular/theme';

describe('LikertQuestionComponent', () => {
  let component: LikertQuestionComponent;
  let fixture: ComponentFixture<LikertQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbListModule, ReactiveFormsModule],
      declarations: [LikertQuestionComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikertQuestionComponent);
    component = fixture.componentInstance;
    component.questionDataForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should have the correct form fields', () => {
    expect(component.f.rows).toBeTruthy();
    expect(component.f.columns).toBeTruthy();
  });

  it('should have the correct default values', () => {
    expect(component.f.rows.value).toEqual([]);
    expect(component.f.columns.value).toEqual([]);
  });

  describe('addRow', () => {
    it('should add a row', () => {
      expect(component.rows.length).toBe(0);
      component.addRow();
      expect(component.rows.length).toBe(1);
      expect(component.rows.controls[0].value).toEqual('Row 1');
    });
  });

  describe('removeRow', () => {
    it('should remove a row with valid index', () => {
      expect(component.rows.length).toBe(0);
      component.addRow();
      component.addRow();
      expect(component.rows.length).toBe(2);
      component.removeRow(1);
      expect(component.rows.length).toBe(1);
      expect(component.rows.controls[0].value).toEqual('Row 1');
    });

    it('should throw an error with a invalid index', () => {
      expect(() => component.removeRow(1)).toThrow(new Error('Index out of bounds'));
    });
  });

  describe('addColumn', () => {
    it('should add a column', () => {
      expect(component.columns.length).toBe(0);
      component.addColumn();
      expect(component.columns.length).toBe(1);
      expect(component.columns.controls[0].value).toEqual('Column 1');
    });
  });

  describe('removeColumn', () => {
    it('should remove a column with valid index', () => {
      expect(component.columns.length).toBe(0);
      component.addColumn();
      component.addColumn();
      expect(component.columns.length).toBe(2);
      component.removeColumn(1);
      expect(component.columns.length).toBe(1);
      expect(component.columns.controls[0].value).toEqual('Column 1');
    });

    it('should throw an error with a invalid index', () => {
      expect(() => component.removeColumn(1)).toThrow(new Error('Index out of bounds'));
    });
  });
});
