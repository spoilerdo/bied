import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireFlowComponent } from './questionnaire-flow.component';
import { QuestionType } from '../enums/question-type.enum';
import { Questionnaire } from '../models/questionnaire/questionnaire.model';
import { Router } from '@angular/router';
import { QuestionnaireStore } from '../store/questionnaire.store';
import { BehaviorSubject } from 'rxjs';
import { CREATE_QUESTIONNAIRE } from '../store/questionnaire.actions';
import {
  NbCardModule,
  NbStepperModule,
  NbListModule,
  NbThemeService,
  NbLayoutModule,
  NbThemeModule,
} from '@nebular/theme';
import { IntroductionStepComponent } from './introduction-step/introduction-step.component';
import { ResultsStepComponent } from './results-step/results-step.component';
import { QuillModule } from 'ngx-quill';
import { QuestionsStepComponent } from './questions-step/questions-step.component';
import { ComponentFactoryResolver } from '@angular/core';
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

describe('QuestionnaireFlowComponent', () => {
  let fixture: ComponentFixture<QuestionnaireFlowComponent>;
  let router = { url: '/', navigate: jasmine.createSpy('navigate') };
  let store = {
    questionnaireStore$: new BehaviorSubject({ questionnaire: mockQuestionnaire, command: CREATE_QUESTIONNAIRE }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionnaireFlowComponent,
        IntroductionStepComponent,
        ResultsStepComponent,
        QuestionsStepComponent,
      ],
      providers: [
        { provide: Router, useValue: router },
        { provide: QuestionnaireStore, useValue: store },
      ],
      imports: [
        NbCardModule,
        NbStepperModule,
        QuillModule.forRoot(),
        NbListModule,
        NbThemeModule.forRoot(),
        NbEvaIconsModule,
      ],
    }).compileComponents();
  }));

  function createFixture(
    url: string = '/',
    currentQuestionnaireSectionId: number = 0,
    useFinishedQuestionnaire: boolean = false,
  ) {
    router.url = url;
    mockQuestionnaire.currentQuestionnaireSectionId = currentQuestionnaireSectionId;
    store.questionnaireStore$.next({ questionnaire: mockQuestionnaire, command: CREATE_QUESTIONNAIRE });

    if (useFinishedQuestionnaire) {
      mockQuestionnaire.questionnaireSections.forEach(qs => {
        qs.questions.forEach(q => {
          q.answer = 'answered';
        });
      });
      store.questionnaireStore$.next({ questionnaire: mockQuestionnaire, command: CREATE_QUESTIONNAIRE });
    }

    fixture = TestBed.createComponent(QuestionnaireFlowComponent);
    fixture.detectChanges();
  }

  // it('should create', () => {
  //   createFixture();
  //   const component = fixture.componentInstance;

  //   expect(component).toBeTruthy();
  // });

  // it('should initialize with -1 as currentStep', () => {
  //   createFixture();
  //   const component = fixture.componentInstance;

  //   expect(component.currentStep).toEqual(-1);
  // });

  // it('should navigate to introduction', () => {
  //   createFixture();
  //   const component = fixture.componentInstance;

  //   expect(router.navigate).toHaveBeenCalledWith(['questionnaire/' + mockQuestionnaire.id + '/introduction']);
  // });

  // it('currentStep should be 0', () => {
  //   createFixture('/introduction');
  //   const component = fixture.componentInstance;

  //   expect(component.currentStep).toEqual(0);
  // });

  // it('currentStep should be 1', () => {
  //   createFixture('/questions');
  //   const component = fixture.componentInstance;

  //   expect(component.currentStep).toEqual(1);
  // });

  // it('currentStep should be 2', () => {
  //   createFixture('/questions', 1);
  //   const component = fixture.componentInstance;

  //   expect(component.currentStep).toEqual(2);
  // });

  // it('should navigate back to introduction', () => {
  //   createFixture('/results');

  //   expect(router.navigate).toHaveBeenCalledWith(['questionnaire/' + mockQuestionnaire.id + '/introduction']);
  // });

  // it('currentStep should be last step', () => {
  //   createFixture('/results', null, true);
  //   const component = fixture.componentInstance;

  //   expect(component.currentStep).toEqual(mockQuestionnaire.questionnaireSections.length + 1);
  // });

  // it('should navigate to introduction', () => {
  //   createFixture('/questions');
  //   const component = fixture.componentInstance;

  //   let questionnaireFlowComponent = fixture.debugElement.injector.get(QuestionnaireFlowComponent);

  //   let componentSpy = spyOn(questionnaireFlowComponent, 'navigateToIntroduction');

  //   component.navigateBack();

  //   expect(componentSpy).toHaveBeenCalled();
  // });

  // it('should navigate to previous question section', () => {
  //   createFixture('/questions', 1);
  //   const component = fixture.componentInstance;

  //   component.navigateBack();

  //   expect(component.currentStep).toEqual(1);
  // });

  // it('should navigate to results', () => {
  //   createFixture('/questions', 2);
  //   const component = fixture.componentInstance;

  //   let questionnaireFlowComponent = fixture.debugElement.injector.get(QuestionnaireFlowComponent);

  //   let componentSpy = spyOn(questionnaireFlowComponent, 'navigateToResults');

  //   component.navigateForward();

  //   expect(componentSpy).toHaveBeenCalled();
  // });

  // it('should navigate to next question section', () => {
  //   createFixture('/questions', 1);
  //   const component = fixture.componentInstance;

  //   let questionnaireFlowComponent = fixture.debugElement.injector.get(QuestionnaireFlowComponent);

  //   let componentSpy = spyOn(questionnaireFlowComponent, 'nextQuestionSection');

  //   component.navigateForward();

  //   expect(component.currentStep).toEqual(2);
  //   expect(componentSpy).toHaveBeenCalled();
  // });

  // it('should not validate questionnaire', () => {
  //   createFixture();
  //   const component = fixture.componentInstance;
  //   let valid = component.validateQuestionnaire();
  //   expect(valid).toBe(false);
  // });
});
