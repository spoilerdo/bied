import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { QuestionnaireFlowComponent } from './questionnaire-flow.component';
import { QuestionType } from '../enums/question-type.enum';
import { Questionnaire } from '../models/questionnaire/questionnaire.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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
    {
      id: 1,
      title: 'Sectie: persoonlijke vragen',
      questions: [
        {
          id: '1',
          type: QuestionType.LIKERT,
          question: 'Ik ben graag samen met anderen',
          information: 'Er wordt gevragen Of u zich vaak alleen voelt.',
          answer: '',
        },
      ],
    },
    {
      id: 2,
      title: 'Sectie: persoonlijke vragen',
      questions: [
        {
          id: '2',
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

fdescribe('QuestionnaireFlowComponent', () => {
  let component: QuestionnaireFlowComponent;
  let fixture: ComponentFixture<QuestionnaireFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [QuestionnaireFlowComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireFlowComponent);
    component = fixture.componentInstance;
    component.questionnaire = mockQuestionnaire;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with -1 as currentStep', () => {
    expect(component.currentStep).toEqual(-1);
  });

  //Render is executed before questionnaire is added to the component
  // it('should render 3 questionSections', () => {
  //   console.log(component.questionSectionList.toArray());
  //   expect(component.questionSectionList.toArray().length).toEqual(3);
  // });
});
