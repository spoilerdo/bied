import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertQuestionComponent } from './likert-question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NbListModule, NbThemeModule } from '@nebular/theme';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
