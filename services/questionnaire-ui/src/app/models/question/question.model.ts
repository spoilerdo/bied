import { QuestionType } from 'src/app/enums/question-type.enum'
import { LikertQuestion } from './question-types/likert-question/likert-question'
import { MultipleChoiceQuestion } from './question-types/multiple-choice-question/multiple-choice-question'
import { QuestionOptions } from '../question-options/question-options.model'

export class Question {
    id: string
    type: QuestionType
    question: any
    options?: QuestionOptions[]
    information?: string
    answer: any
}
