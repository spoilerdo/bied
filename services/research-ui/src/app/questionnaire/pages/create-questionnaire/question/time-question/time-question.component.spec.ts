import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeQuestionComponent } from './time-question.component';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('TimeQuestionComponent', () => {
  let component: TimeQuestionComponent;
  let fixture: ComponentFixture<TimeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
