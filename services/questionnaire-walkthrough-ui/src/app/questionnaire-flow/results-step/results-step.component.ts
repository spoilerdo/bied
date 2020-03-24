import { Component, OnInit } from '@angular/core';
import { QuestionnaireStore } from 'src/app/store/questionnaire.store';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { Subscription } from 'rxjs';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { Question } from 'src/app/models/question/question.model';

@Component({
  selector: 'app-results-step',
  templateUrl: './results-step.component.html',
  styleUrls: ['./results-step.component.scss'],
})
export class ResultsStepComponent implements OnInit {
  public questionnaire: Questionnaire;
  private questionnaireSubscription: Subscription;

  constructor(private questionnaireStore: QuestionnaireStore) {}

  async ngOnInit(): Promise<void> {
    this.questionnaireSubscription = this.questionnaireStore.questionnaireStore$.subscribe(data => {
      this.questionnaire = data;
      console.log('getting updated questionnaire: ', this.questionnaire);
    });
  }

  async ngOnDestroy(): Promise<void> {
    this.questionnaireSubscription.unsubscribe();
    console.log('destroying');
  }

  public getQuestionType(question: Question): string {
    return QuestionType[question.type];
  }
}
