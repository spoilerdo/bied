import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionnaireStore } from 'src/app/store/questionnaire.store';

@Component({
  selector: 'app-questions-step',
  templateUrl: './questions-step.component.html',
  styleUrls: ['./questions-step.component.scss'],
})
export class QuestionsStepComponent implements OnInit, OnDestroy {
  public questionnaire: Questionnaire;
  private questionnaireSubscription: Subscription;

  constructor(private questionnaireStore: QuestionnaireStore) {}

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
