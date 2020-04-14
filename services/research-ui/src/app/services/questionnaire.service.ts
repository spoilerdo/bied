import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire, QuestionnairesResponse } from '../models/questionnaire';
import { questionnaires } from './mock-questionnaires';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor() {}

  getQuestionnaires(page: number = 1, pagesize: number = 20): Observable<QuestionnairesResponse> {
    // TODO use actual API endpoint

    const startIndex = (page - 1) * pagesize;
    const response = {
      totalItems: questionnaires.length,
      page,
      questionnaires: questionnaires.slice(startIndex, startIndex + pagesize),
    };
    return of(response);
  }

  removeQuestionnaire(id: number) {
    // TODO use actual API endpoint
    const index = questionnaires.findIndex((questionnaire) => questionnaire.id === id);
    questionnaires.splice(index, 1);
  }

  renameQuestionnaire(id: number, name: string) {
    // TODO use actual API endpoint
    const index = questionnaires.findIndex((questionnaire) => questionnaire.id === id);
    questionnaires[index].name = name;
  }

  duplicateQuestionnaire(id: number) {
    const index = questionnaires.findIndex((questionnaire) => questionnaire.id === id);

    const dupQuestionnaire = { ...questionnaires[index] };
    dupQuestionnaire.id = questionnaires[questionnaires.length - 1].id + 1;
    questionnaires.push(dupQuestionnaire);
  }
}
