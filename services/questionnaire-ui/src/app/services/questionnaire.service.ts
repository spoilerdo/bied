import { Injectable } from '@angular/core';
import { Questionnaire } from '../models/questionnaire/questionnaire.model';
import { QuestionType } from '../enums/question-type.enum';
import { QuestionnaireStore } from '../store/questionnaire.store';
import { QuestionnaireReducers } from '../store/questionnaire.reducers';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor(private questionnaireStore: QuestionnaireStore, private questionnaireReducers: QuestionnaireReducers) {}

  // public async getQuestionnaire(): Promise<Questionnaire> {
  //   return this.questionnaireStore.questionnaireStore$.sub
  // }
}
