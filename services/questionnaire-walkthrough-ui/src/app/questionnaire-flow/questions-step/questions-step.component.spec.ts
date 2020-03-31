import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsStepComponent } from './questions-step.component';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { NbListItemComponent, NB_STEPPER, NbSelectComponent, NbCardComponent } from '@nebular/theme';

let mockQuestionnaire: Questionnaire = {
  id: '0',
  currentQuestionnaireSectionId: 0,
  description: 'description',
  endingMessage: 'endingMessage',
  questionnaireSections: [
    {
      id: 0,
      title: 'Sectie: persoonlijke vragen',
      questions: [
        {
          id: '0',
          type: QuestionType.LIKERT,
          question: 'Ik ben graag samen met anderen',
          information: 'Er wordt gevragen Of u zich vaak alleen voelt.',
          answer: '',
        },
      ],
    },
  ],
  startButtonText: 'startButtonText',
  title: 'title',
};

describe('QuestionsStepComponent', () => {
  let component: QuestionsStepComponent;
  let fixture: ComponentFixture<QuestionsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsStepComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsStepComponent);
    component = fixture.componentInstance;
    component.questionnaire = mockQuestionnaire;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
