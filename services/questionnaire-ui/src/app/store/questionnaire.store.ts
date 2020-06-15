import { Injectable } from '@angular/core';
import { Questionnaire } from '../models/questionnaire/questionnaire.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireStore {
  public questionnaire: Questionnaire;
  // public questionnaireStore$: BehaviorSubject<{ questionnaire: Questionnaire; command: string }>;

  constructor() {

    // this.questionnaireStore$ = new BehaviorSubject({ questionnaire: this.initialState, command: CREATE_QUESTIONNAIRE });
  }
}
