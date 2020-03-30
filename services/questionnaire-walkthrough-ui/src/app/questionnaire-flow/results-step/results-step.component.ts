import { Component, OnInit, Input } from '@angular/core';
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
  @Input()
  public questionnaire: Questionnaire;

  constructor() {}

  async ngOnInit(): Promise<void> {}

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
}
