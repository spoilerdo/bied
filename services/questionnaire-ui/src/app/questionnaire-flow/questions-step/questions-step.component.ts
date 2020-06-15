import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  AfterViewInit,
  ComponentRef,
  ChangeDetectorRef,
  ViewChildren,
  QueryList,
  Input,
} from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { Question } from 'src/app/models/question/question.model';
import { QUESTION_TYPE_DECORATOR_KEY } from 'src/app/decorators/question-type.decorator';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import 'reflect-metadata';
import { questionComponents } from 'src/app/question/question.module';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions-step',
  templateUrl: './questions-step.component.html',
  styleUrls: ['./questions-step.component.scss'],
})
export class QuestionsStepComponent implements OnInit, AfterViewInit {
  @Input()
  public questionnaire: Questionnaire;

  @Input()
  public questionsForm: FormGroup;

  @ViewChildren('containers', { read: ViewContainerRef }) containerList!: QueryList<ViewContainerRef>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  get questions(): FormArray {
    return this.questionsForm.controls.questions as FormArray;
  }

  public generateQuestionComponents(): void {
    this.ref.detectChanges();

    for (let i = 0; i < this.containerList.length; i++) {
      let container = this.containerList.toArray()[i];
      let question = this.getQuestions(this.questionnaire.currentQuestionnaireSectionId)[i];

      const component = questionComponents.find(
        (q) => Reflect.getMetadata(QUESTION_TYPE_DECORATOR_KEY, q) === question.type,
      );

      const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      let questionReference = container.createComponent(factory) as ComponentRef<BiedQuestionComponent>;
      questionReference.instance.id = question.id;
      questionReference.instance.information = question.information;
      questionReference.instance.options = question.options;
      questionReference.instance.question = question.question;
      questionReference.instance.answer = question.answer;
      questionReference.instance.type = question.type;
      questionReference.instance.parentForm = this.questions.controls[i] as FormGroup;
    }

    this.ref.detectChanges();
  }

  ngAfterViewInit(): void {
    this.generateQuestionComponents();
  }

  public getQuestions(questionnaireSectionId: number) {
    return this.questionnaire.questionnaireSections[questionnaireSectionId - 1].questions;
  }

  public getQuestionType(question: Question): string {
    return QuestionType[question.type];
  }
}
