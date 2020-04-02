import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsStepComponent } from './questions-step.component';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { NO_ERRORS_SCHEMA, InjectionToken } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { NbRadioGroupComponent, NbPositionBuilderService, NbThemeModule } from '@nebular/theme';
import { QuestionModule } from 'src/app/question/question.module';
import { LikertComponent } from 'src/app/components/likert/likert.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

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

fdescribe('QuestionsStepComponent', () => {
  let component: QuestionsStepComponent;
  let fixture: ComponentFixture<QuestionsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsStepComponent],
      imports: [NbThemeModule.forRoot(), NbEvaIconsModule],
      schemas: [NO_ERRORS_SCHEMA],
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
