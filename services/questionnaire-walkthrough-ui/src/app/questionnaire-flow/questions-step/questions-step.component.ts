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

@Component({
  selector: 'app-questions-step',
  templateUrl: './questions-step.component.html',
  styleUrls: ['./questions-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsStepComponent implements OnInit, OnDestroy, AfterViewInit {
  public questionnaire: Questionnaire;
  private questionnaireSubscription: Subscription;

  @ViewChild('yeet', { read: ViewContainerRef }) questionList: ViewContainerRef;

  constructor(
    private questionnaireStore: QuestionnaireStore,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.questionnaireSubscription = this.questionnaireStore.questionnaireStore$.subscribe(data => {
      this.questionnaire = data;
    });
  }

  ngAfterViewInit(): void {
    console.log(this.questionList);

    this.questionList.clear();
    this.getQuestions(this.questionnaire.currentQuestionnaireSectionId).forEach(q => {
      const component = questionComponents.find(i => Reflect.getMetadata(QUESTION_TYPE_DECORATOR_KEY, i) === q.type);

      const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      let questionRef = this.questionList.createComponent(factory) as ComponentRef<BiedQuestionComponent>;

      questionRef.instance.id = q.id;
      questionRef.instance.information = q.information;
      questionRef.instance.options = q.options;
      questionRef.instance.question = q.question;
      questionRef.instance.answer = q.answer;
      questionRef.instance.type = q.type;

      const secondfoktory = this.componentFactoryResolver.resolveComponentFactory(LikertComponent);
    });

    this.ref.detectChanges();
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
