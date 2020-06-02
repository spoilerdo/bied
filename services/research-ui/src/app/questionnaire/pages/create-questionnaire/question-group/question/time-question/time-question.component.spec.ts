import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeQuestionComponent } from './time-question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('TimeQuestionComponent', () => {
  let component: TimeQuestionComponent;
  let fixture: ComponentFixture<TimeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TimeQuestionComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeQuestionComponent);
    component = fixture.componentInstance;
    component.questionDataForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should have the correct form fields', () => {
    expect(component.questionDataForm.controls.placeholder).toBeTruthy();
    expect(component.questionDataForm.controls.min).toBeTruthy();
    expect(component.questionDataForm.controls.max).toBeTruthy();
  });

  it('should have the correct default values', () => {
    expect(component.questionDataForm.controls.placeholder.value).toEqual('Time');
    expect(component.questionDataForm.controls.min.value).toBeNull();
    expect(component.questionDataForm.controls.max.value).toBeNull();
  });
});
