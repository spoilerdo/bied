import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ViewChild,
  ComponentFactory,
  ViewContainerRef,
  AfterContentInit,
  AfterViewInit,
  ComponentRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionnaireStore } from 'src/app/store/questionnaire.store';
import { TestingComponent } from 'src/app/components/testing/testing.component';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { Question } from 'src/app/models/question/question.model';
import { LikertComponent } from 'src/app/components/likert/likert.component';
import 'reflect-metadata';
import { NbListComponent, NbListItemComponent } from '@nebular/theme';
import { LikertGroupComponent } from 'src/app/components/likert-group/likert-group.component';
import { QUESTION_TYPE_DECORATOR_KEY } from 'src/app/decorators/question-type.decorator';
import { RadioComponent } from 'src/app/components/radio/radio.component';
import { TextComponent } from 'src/app/components/text/text.component';
import { MultipleChoiceComponent } from 'src/app/components/multiple-choice/multiple-choice.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { NumericComponent } from 'src/app/components/numeric/numeric.component';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';

@Component({
  selector: 'app-questions-step',
  templateUrl: './questions-step.component.html',
  styleUrls: ['./questions-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsStepComponent implements OnInit, OnDestroy, AfterViewInit {
  public questionnaire: Questionnaire;
  private questionnaireSubscription: Subscription;

  private questionComponents: any[] = [
    LikertComponent,
    LikertGroupComponent,
    MultipleChoiceComponent,
    DropdownComponent,
    NumericComponent,
    RadioComponent,
    TextComponent,
  ];

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
      const component = this.questionComponents.find(
        i => Reflect.getMetadata(QUESTION_TYPE_DECORATOR_KEY, i) === q.type,
      );

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
