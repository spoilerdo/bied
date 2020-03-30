import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/questionnaire';
import { questionnaires } from './mock-questionnaires';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor() {}

  getQuestionnaires(page: number = 1, pagesize: number = 20): Observable<Questionnaire[]> {
    // TODO use actual API endpoint

    const startIndex = (page - 1) * pagesize;
    return of(questionnaires.slice(startIndex, startIndex + pagesize));
  }

  removeQuestionnaire(id: number) {
    // TODO use actual API endpoint
    const index = questionnaires.findIndex(questionnaire => questionnaire.id === id);
    questionnaires.splice(index, 1);
  }

  renameQuestionnaire(id: number, name: string) {
    // TODO use actual API endpoint
    const index = questionnaires.findIndex(questionnaire => questionnaire.id === id);
    questionnaires[index].name = name;
  }
}
