import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/questionnaire';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor() {}

  getQuestionnaires(): Observable<Questionnaire[]> {
    // TODO use actual API endpoint
    const questionnaires: Questionnaire[] = [];
    for (let i = 0; i < 20; i++) {
      questionnaires.push({
        id: i,
        name: `questionnaire ${i}`,
        description: `this is the description of questionnaire ${i}`,
      });
    }

    return of(questionnaires);
  }
}
