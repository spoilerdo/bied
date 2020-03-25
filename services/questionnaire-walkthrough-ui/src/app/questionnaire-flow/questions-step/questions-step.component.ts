import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from "rxjs";
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { QuestionnaireStore } from 'src/app/store/questionnaire.store';
import { QuestionnaireReducers } from 'src/app/store/questionnaire.reducers';
import { PREVIOUS_SECTION, NEXT_SECTION } from 'src/app/store/questionnaire.actions';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { Question } from 'src/app/models/question/question.model';

@Component({
  selector: 'app-questions-step',
  templateUrl: './questions-step.component.html',
  styleUrls: ['./questions-step.component.scss'],
})
export class QuestionsStepComponent implements OnInit, OnDestroy {
  public questionnaire: Questionnaire;
  private questionnaireSubscription: Subscription;

  constructor(
    private router: Router,
    private questionnaireStore: QuestionnaireStore,
    private questionnaireReducers: QuestionnaireReducers,
  ) {}

  async ngOnInit(): Promise<void> {
    console.log('creating')
    this.questionnaireSubscription = this.questionnaireStore.questionnaireStore$.subscribe(data => {
      this.questionnaire = data;
    });
  }

  async ngOnDestroy(): Promise<void> {
    this.questionnaireSubscription.unsubscribe();
    console.log('destroying')
  }

  public previousQuestion() {
    console.log('previous')
    this.questionnaireReducers.questionnaireReducer({
      type: PREVIOUS_SECTION,
    });
  }

  public nextQuestion() {
    console.log('next')
    this.questionnaireReducers.questionnaireReducer({
      type: NEXT_SECTION,
    });
  }

  public navigateToIntroduction() {
    this.router.navigate(['questionnaire/' + this.questionnaire.id + '/introduction']);
  }

  public navigateToResults() {
    this.router.navigate(['questionnaire/' + this.questionnaire.id + '/results']);
  }

  public isFirstQuestion(): boolean {
    return this.questionnaire.currentQuestionnaireSectionId === 0;
  }

  public isLastQuestion(): boolean {
    return this.questionnaire.currentQuestionnaireSectionId === this.questionnaire.questionnaireSections.length - 1;
  }

  public printMe() {
    console.log(this.questionnaire);
  }

  public getQuestions(questionnaireSectionId: number) {
    return this.questionnaire.questionnaireSections[questionnaireSectionId].questions;
  }

  public getTitle(questionnaireSectionId: number) {
    return this.questionnaire.questionnaireSections[questionnaireSectionId].title;
  }
}
