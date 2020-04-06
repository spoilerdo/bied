import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceQuestionComponent } from './choice-question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NbLayoutDirectionService, NbListModule, NbToggleModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChoiceQuestionComponent', () => {
  let component: ChoiceQuestionComponent;
  let fixture: ComponentFixture<ChoiceQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbListModule, NbToggleModule, BrowserAnimationsModule, ReactiveFormsModule],
      declarations: [ChoiceQuestionComponent],
      providers: [FormBuilder, NbLayoutDirectionService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceQuestionComponent);
    component = fixture.componentInstance;
    component.questionDataForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
