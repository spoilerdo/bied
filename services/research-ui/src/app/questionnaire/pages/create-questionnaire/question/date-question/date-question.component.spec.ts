import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateQuestionComponent } from './date-question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NbDatepickerModule, NbThemeModule } from '@nebular/theme';

describe('DateQuestionComponent', () => {
  let component: DateQuestionComponent;
  let fixture: ComponentFixture<DateQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbThemeModule.forRoot(), NbDatepickerModule.forRoot(), ReactiveFormsModule],
      declarations: [DateQuestionComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateQuestionComponent);
    component = fixture.componentInstance;
    component.questionDataForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should have the correct form fields', () => {
    const form = component.questionDataForm.controls;
    expect(form.placeholder).toBeTruthy();
    expect(form.min).toBeTruthy();
    expect(form.max).toBeTruthy();
  });

  it('should have the correct default values', () => {
    const form = component.questionDataForm.controls;
    expect(form.placeholder.value).toEqual('Date');
    expect(form.min.value).toBeNull();
    expect(form.max.value).toBeNull();
  });

  describe('dateLessThan', () => {
    const today = new Date();
    const yesterday = new Date(today.getDate() - 1);

    it('should return an empty object when valid', () => {
      const checkDate = component.dateLessThan('min', 'max');
      component.questionDataForm.controls.min.setValue(yesterday);
      component.questionDataForm.controls.max.setValue(today);

      expect(checkDate(component.questionDataForm)).toEqual({});
    });

    it('should return a filled object when invalid', () => {
      const checkDate = component.dateLessThan('min', 'max');
      component.questionDataForm.controls.min.setValue(today);
      component.questionDataForm.controls.max.setValue(yesterday);

      expect(checkDate(component.questionDataForm)).toEqual({
        dates: 'Date from should be less than Date to',
      });
    });
  });
});
