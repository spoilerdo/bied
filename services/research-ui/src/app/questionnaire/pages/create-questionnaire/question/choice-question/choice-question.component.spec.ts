import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceQuestionComponent } from './choice-question.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbLayoutDirectionService, NbListModule, NbToggleModule } from '@nebular/theme';

describe('ChoiceQuestionComponent', () => {
  let component: ChoiceQuestionComponent;
  let fixture: ComponentFixture<ChoiceQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbListModule, NbToggleModule],
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
