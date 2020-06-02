import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbIconModule,
  NbSelectComponent,
  NbSelectModule,
  NbThemeModule,
  NbToggleModule,
} from '@nebular/theme';
import { CoreModule } from '../../../../../@core/core.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NbThemeModule.forRoot(),
        NbCardModule,
        NbSelectModule,
        NbIconModule,
        NbEvaIconsModule,
        NbToggleModule,
      ],
      declarations: [QuestionComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.questionForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should have the correct form fields', () => {
    expect(component.f.label).toBeTruthy();
    expect(component.f.required).toBeTruthy();
    expect(component.f.questionType).toBeTruthy();
    expect(component.f.questionData).toBeTruthy();
  });

  it('should have the correct default values', () => {
    expect(component.f.label.value).toEqual('Question');
    expect(component.f.required.value).toBeFalsy();
    expect(component.f.questionType.value).toBeNull();
    expect(component.f.questionData.value).toEqual({});
  });

  describe('formTypeChanged', () => {
    it('should reset the questionData form field', () => {
      // TODO: Test formTypeChanged function
    });
  });
});
