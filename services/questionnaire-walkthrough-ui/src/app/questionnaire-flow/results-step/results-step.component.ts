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
    });
  }

  async ngOnDestroy(): Promise<void> {
    this.questionnaireSubscription.unsubscribe();
    console.log('destroying');
  }

  public getAllQuestionsPerSection(sectionId: number) {
    let questions = [];

    this.questionnaire.questionnaireSections[sectionId].questions.forEach(q => {
      if (q.type !== QuestionType.LIKERT_GROUP) {
        questions.push({ question: q.question, answer: q.answer });
      } else {
        q.question.forEach(sq => {
          questions.push({ question: sq.question, answer: sq.answer });
        });
      }
    });
    return questions;
  }

  public getAllQuestions() {
    let questions = [];
    
    this.questionnaire.questionnaireSections.forEach(s => {
      s.questions.forEach(q => {
        if (q.type !== QuestionType.LIKERT_GROUP) {
          questions.push({ question: q.question, answer: q.answer });
        } else {
          q.question.forEach(sq => {
            questions.push({ question: sq.question, answer: sq.answer });
          });
        }
      });
    });

    return questions;
  }

  public getQuestionType(question: Question): string {
    return QuestionType[question.type];
  }
}
