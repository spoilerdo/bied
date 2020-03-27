import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionnaireStore } from 'src/app/store/questionnaire.store';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { Question } from 'src/app/models/question/question.model';
import { LikertComponent } from 'src/app/components/likert/likert.component';
import { QUESTION_TYPE_DECORATOR_KEY } from 'src/app/decorators/question-type.decorator';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import 'reflect-metadata';
import { questionComponents } from 'src/app/question/question.module';
import { NbListItemComponent } from '@nebular/theme';
import { NEXT_SECTION, PREVIOUS_SECTION } from 'src/app/store/questionnaire.actions';

@Component({
  selector: 'app-questions-step',
  templateUrl: './questions-step.component.html',
  styleUrls: ['./questions-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsStepComponent implements OnInit, OnDestroy, AfterViewInit {
  public questionnaire: Questionnaire;
  private questionnaireSubscription: Subscription;

  @ViewChildren('container', { read: ViewContainerRef }) containerList!: QueryList<ViewContainerRef>;

  constructor(
    private questionnaireStore: QuestionnaireStore,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.questionnaireSubscription = this.questionnaireStore.questionnaireStore$.subscribe(data => {
      this.questionnaire = data.questionnaire;

      if (data.command === NEXT_SECTION || data.command === PREVIOUS_SECTION) {
        this.ref.detectChanges();
        this.generateQuestionComponents();
      }
    });
  }

  generateQuestionComponents(): void {
    for (let i = 0; i < this.containerList.length; i++) {
      let container = this.containerList.toArray()[i];
      let question = this.getQuestions(this.questionnaire.currentQuestionnaireSectionId)[i];

      const component = questionComponents.find(
        q => Reflect.getMetadata(QUESTION_TYPE_DECORATOR_KEY, q) === question.type,
      );

      const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      let questionReference = container.createComponent(factory) as ComponentRef<BiedQuestionComponent>;

      questionReference.instance.id = question.id;
      questionReference.instance.information = question.information;
      questionReference.instance.options = question.options;
      questionReference.instance.question = question.question;
      questionReference.instance.answer = question.answer;
      questionReference.instance.type = question.type;
    }

    this.ref.detectChanges();
  }

  ngAfterViewInit(): void {
    this.generateQuestionComponents();
  }

  async ngOnDestroy(): Promise<void> {
    this.questionnaireSubscription.unsubscribe();
  }

  public getQuestions(questionnaireSectionId: number) {
    return this.questionnaire.questionnaireSections[questionnaireSectionId].questions;
  }

  public getQuestionType(question: Question): string {
    return QuestionType[question.type];
  }
}
