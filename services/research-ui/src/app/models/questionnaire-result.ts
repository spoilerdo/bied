import { QuestionType } from 'src/app/models/question-type';

export interface QuestionnaireResult {
  id: number;
  name: string;
  description: string;
  questionAnswers: QuestionnaireAnswer[];
}

export interface QuestionnaireAnswer {
  id: number;
  userId: string;
  name: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: number;
  label: string;
  type: QuestionType;
  description: string;
  data: string;
  index: number;
  required: boolean;
}
