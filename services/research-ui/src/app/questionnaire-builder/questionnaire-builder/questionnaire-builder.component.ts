import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  ViewContainerRef,
  QueryList,
  ComponentRef,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { questionnaireResultMock } from 'src/app/mocks/mock-questionnaire-result';
import { QuestionnaireResult, Question, QuestionAnswer } from 'src/app/models/questionnaire-result';
import { questionComponents } from 'src/app/models/question/question.module';
import { QUESTION_TYPE_DECORATOR_KEY } from 'src/app/decorators/questiontype.decorator';
import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import { QuestionType } from 'src/app/models/question-type';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire-builder',
  templateUrl: './questionnaire-builder.component.html',
  styleUrls: ['./questionnaire-builder.component.scss'],
})
export class QuestionnaireBuilderComponent implements OnInit {
  @Input() public questionnaireResult: QuestionnaireResult;
  @ViewChildren('containers', { read: ViewContainerRef }) containerList: QueryList<ViewContainerRef>;

  public questions: Array<QuestionAnswer[]> = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { questionnaireResult: QuestionnaireResult }) => {
      this.questionnaireResult = data.questionnaireResult;

      for (let i = 0; i < this.questionnaireResult.questionAnswers[0].questions.length; i++) {
        let temp: QuestionAnswer[] = [];
        this.questionnaireResult.questionAnswers.forEach(function (response) {
          temp.push(response.questions[i]);
        });
        this.questions.push(temp);
      }
    });
  }

  public buildQuestionniareResult(): void {
    // Deze methode later naar de back-end verplaatsen, nu is er nog niks in de backend om dit te ondersteunen.
    this.ref.detectChanges();

    for (let i = 0; i < this.questions.length; i++) {
      let container = this.containerList.toArray()[i];

      const component = questionComponents.find(
        (q) => Reflect.getMetadata(QUESTION_TYPE_DECORATOR_KEY, q) === this.questions[i][0].type,
      );

      const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      let questionReference = container.createComponent(factory) as ComponentRef<BiedQuestionComponent>;
      questionReference.instance.questionAnswer = this.questions[i];
    }

    this.ref.detectChanges();
  }

  ngAfterViewInit(): void {
    this.buildQuestionniareResult();
  }
}
