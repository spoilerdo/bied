import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { QuestionnaireStore } from 'src/app/store/questionnaire.store';
import { TestingComponent } from 'src/app/components/testing/testing.component';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { Question } from 'src/app/models/question/question.model';

@Component({
  selector: 'app-questions-step',
  templateUrl: './questions-step.component.html',
  styleUrls: ['./questions-step.component.scss'],
})
export class QuestionsStepComponent implements OnInit, OnDestroy {
  public questionnaire: Questionnaire;
  private questionnaireSubscription: Subscription;

  @ViewChild('yeet', {static: true}) myList: TestingComponent;

  constructor(
    private questionnaireStore: QuestionnaireStore,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  async ngOnInit(): Promise<void> {
    this.questionnaireSubscription = this.questionnaireStore.questionnaireStore$.subscribe(data => {
      this.questionnaire = data;
    });

    console.log(window)

    // console.log(Object.create("QuestionsStepComponent"))
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory((Component as any)["TextComponent"]);

    // const viewContainerRef = this.myList.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<TextComponent>componentRef.instance).answer = "NOYOUDIDNOT"
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
