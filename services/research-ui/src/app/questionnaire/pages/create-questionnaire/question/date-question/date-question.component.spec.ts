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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
