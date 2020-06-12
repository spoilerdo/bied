import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireFlowComponent } from './questionnaire-flow.component';
import { Router, ActivatedRoute } from '@angular/router';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { NbCardModule, NbStepperModule, NbListModule, NbThemeModule } from '@nebular/theme';
import { IntroductionStepComponent } from './introduction-step/introduction-step.component';
import { ResultsStepComponent } from './results-step/results-step.component';
import { QuillModule } from 'ngx-quill';
import { QuestionsStepComponent } from './questions-step/questions-step.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { mockQuestionnaire } from '../mock/MockQuestionnaire';

describe('QuestionnaireFlowComponent', () => {
  let fixture: ComponentFixture<QuestionnaireFlowComponent>;
  let router = { url: '/', navigate: jasmine.createSpy('navigate') };
  let route = { data: of({ questionnaire: mockQuestionnaire }) };

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
        { provide: ActivatedRoute, useValue: route },
      ],
      imports: [
        NbCardModule,
        NbStepperModule,
        QuillModule.forRoot(),
        NbListModule,
        NbThemeModule.forRoot(),
        NbEvaIconsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireFlowComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});
