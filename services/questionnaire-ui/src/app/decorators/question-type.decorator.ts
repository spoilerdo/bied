import { QuestionType } from '../enums/question-type.enum';
import 'reflect-metadata';

export const QUESTION_TYPE_DECORATOR_KEY = 'QUESTION_TYPE_DECORATOR_KEY';

export function QuestionTypeDecorator(questionType: QuestionType) {
  return function(target) {
    Reflect.defineMetadata(QUESTION_TYPE_DECORATOR_KEY, questionType, target);
  };
}
