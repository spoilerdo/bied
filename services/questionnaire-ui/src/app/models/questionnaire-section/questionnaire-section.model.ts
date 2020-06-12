import { Question } from '../question/question.model';

export class QuestionnaireSection {
    id: number
    title: string
    questions: Question[]
}
