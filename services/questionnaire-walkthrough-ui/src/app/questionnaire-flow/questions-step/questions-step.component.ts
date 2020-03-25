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
    this.questionnaireSubscription = this.questionnaireStore.questionnaireStore$.subscribe(data => {
      this.questionnaire = data;
    });
  }

  async ngOnDestroy(): Promise<void> {
    this.questionnaireSubscription.unsubscribe();
  }

  public getQuestions(questionnaireSectionId: number) {
    return this.questionnaire.questionnaireSections[questionnaireSectionId].questions;
  }
}
