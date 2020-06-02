import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQuestionComponent } from './text-question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NbLayoutDirectionService, NbToggleModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TextQuestionComponent', () => {
  let component: TextQuestionComponent;
  let fixture: ComponentFixture<TextQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbToggleModule, BrowserAnimationsModule, ReactiveFormsModule],
      declarations: [TextQuestionComponent],
      providers: [FormBuilder, NbLayoutDirectionService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextQuestionComponent);
    component = fixture.componentInstance;
    component.questionDataForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should have the correct form fields', () => {
    expect(component.f.multiLine).toBeTruthy();
    expect(component.f.placeholder).toBeTruthy();
  });

  it('should have the correct default values', () => {
    expect(component.f.multiLine.value).toBeFalsy();
    expect(component.f.placeholder.value).toEqual('');
  });
});
