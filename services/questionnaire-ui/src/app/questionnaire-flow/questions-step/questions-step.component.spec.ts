import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsStepComponent } from './questions-step.component';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { NbThemeModule, NbListModule, NbIconModule, NbIconComponent } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { mockQuestionnaire } from 'src/app/mock/MockQuestionnaire';

describe('QuestionsStepComponent', () => {
  let component: QuestionsStepComponent;
  let fixture: ComponentFixture<QuestionsStepComponent>;
  let formBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsStepComponent, NbIconComponent],
      imports: [NbThemeModule.forRoot(), NbEvaIconsModule, NbListModule, NbIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsStepComponent);
    component = fixture.componentInstance;
    let questionnaire = mockQuestionnaire;
    questionnaire.currentQuestionnaireSectionId = 1;
    component.questionnaire = questionnaire;
    component.questionsForm = formBuilder.group({ section: 0, questions: formBuilder.array([]) });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
