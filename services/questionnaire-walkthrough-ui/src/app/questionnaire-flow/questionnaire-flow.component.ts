import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs';
import { Questionnaire } from '../models/questionnaire/questionnaire.model';
import { Router } from '@angular/router';
import { QuestionnaireStore } from '../store/questionnaire.store';
import { QuestionnaireReducers } from '../store/questionnaire.reducers';
import { PREVIOUS_SECTION, NEXT_SECTION } from '../store/questionnaire.actions';
import { QuestionnaireSection } from '../models/questionnaire-section/questionnaire-section.model';
import { QuestionType } from '../enums/question-type.enum';

@Component({
  selector: 'app-questionnaire-flow',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './questionnaire-flow.component.html',
  styleUrls: ['./questionnaire-flow.component.scss'],
})
export class QuestionnaireFlowComponent implements OnInit, OnDestroy {
  public questionnaire: Questionnaire;
  private questionnaireSubscription: Subscription;
  public currentStep = 0;

  constructor(
    private router: Router,
    private questionnaireStore: QuestionnaireStore,
    private questionnaireReducers: QuestionnaireReducers,
  ) {}

  async ngOnInit(): Promise<void> {
    this.questionnaireSubscription = this.questionnaireStore.questionnaireStore$.subscribe(data => {
      this.questionnaire = data;
    });

    switch (this.router.url.split('/').pop()) {
      case 'introduction': {
        this.currentStep = 0;
        break;
      }
      case 'questions': {
        this.currentStep = this.questionnaire.currentQuestionnaireSectionId + 1;
        break;
      }
      case 'results': {
        if (this.validateQuestionnaire()) {
          this.currentStep = this.getQuestionSections().length + 1;
        } else {
          await this.ngOnDestroy();
          this.navigateToIntroduction();
        }
        break;
      }
    }
  }

  async ngOnDestroy(): Promise<void> {
    this.questionnaireSubscription.unsubscribe();
  }

  public getCurrentStep(): number {
    return this.currentStep;
  }

  public completedStep(index: number): boolean {
    return index < this.currentStep;
  }

  public navigateToIntroduction(): void {
    this.router.navigate(['questionnaire/' + this.questionnaire.id + '/introduction']);
  }

  public navigateToQuestions(): void {
    this.router.navigate(['questionnaire/' + this.questionnaire.id + '/questions']);
  }

  public navigateToResults(): void {
    this.router.navigate(['questionnaire/' + this.questionnaire.id + '/results']);
  }

  public getQuestionSections(): QuestionnaireSection[] {
    return this.questionnaire.questionnaireSections;
  }

  public isFirstSection(): boolean {
    return this.questionnaire.currentQuestionnaireSectionId === 0;
  }

  public isLastSection(): boolean {
    return this.questionnaire.currentQuestionnaireSectionId === this.questionnaire.questionnaireSections.length - 1;
  }

  public validateQuestionnaire(): boolean {
    let completed = true;

    this.questionnaire.questionnaireSections.forEach(s => {
      s.questions.forEach(q => {
        if (q.type === QuestionType.LIKERT_GROUP) {
          q.question.forEach(sq => {
            if (sq.answer === '') {
              completed = false;
            }
          });
        } else {
          if (q.answer === '') {
            completed = false;
          }
        }
      });
    });

    return completed;
  }

  public previousQuestionSection(): void {
    this.currentStep--;
    this.questionnaireReducers.questionnaireReducer({
      type: PREVIOUS_SECTION,
    });
  }

  public nextQuestionSection(): void {
    this.currentStep++;
    this.questionnaireReducers.questionnaireReducer({
      type: NEXT_SECTION,
    });
  }
}
