import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionStepComponent } from './introduction-step.component';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

let mockQuestionnaire: Questionnaire = {
  id: '0',
  currentQuestionnaireSectionId: 0,
  description: 'description',
  endingMessage: 'endingMessage',
  questionnaireSections: [],
  startButtonText: 'startButtonText',
  title: 'title',
};

fdescribe('IntroductionStepComponent', () => {
  let component: IntroductionStepComponent;
  let fixture: ComponentFixture<IntroductionStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionStepComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionStepComponent);
    component = fixture.componentInstance;
    component.questionnaire = mockQuestionnaire;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
