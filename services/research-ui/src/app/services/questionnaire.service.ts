import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/questionnaire';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor() {}

  getQuestionnaires(page: number = 0, pagesize: number = 20): Observable<Questionnaire[]> {
    // TODO use actual API endpoint
    const questionnaires: Questionnaire[] = [];
    for (let i = 0; i < pagesize; i++) {
      const index = page * pagesize + i;
      questionnaires.push({
        id: index,
        name: `questionnaire ${index}`,
        description: `this is the description of questionnaire ${index}`,
      });
    }

    return of(questionnaires);
  }
}
