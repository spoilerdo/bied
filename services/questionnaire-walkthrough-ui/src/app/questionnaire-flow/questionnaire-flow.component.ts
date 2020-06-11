import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Questionnaire } from '../models/questionnaire/questionnaire.model';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionnaireSection } from '../models/questionnaire-section/questionnaire-section.model';
import { QuestionType } from '../enums/question-type.enum';
import { QuestionsStepComponent } from './questions-step/questions-step.component';
import { QuestionnaireStore } from '../store/questionnaire.store';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-questionnaire-flow',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './questionnaire-flow.component.html',
  styleUrls: ['./questionnaire-flow.component.scss'],
})
export class QuestionnaireFlowComponent implements OnInit {
  public questionnaire: Questionnaire;
  public myForms: FormGroup[] = [];

  @ViewChildren('questionSections') questionSectionList: QueryList<QuestionsStepComponent>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionnaireStore: QuestionnaireStore,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { questionnaire: Questionnaire }) => {
      for (let i = 0; i < data.questionnaire.questionnaireSections.length; i++) {
        this.myForms.push(this.formBuilder.group({ section: i, questions: this.formBuilder.array([]) }));

        for (let x = 0; x < data.questionnaire.questionnaireSections[i].questions.length; x++) {
          let question = data.questionnaire.questionnaireSections[i].questions[x];

          if (question.type === QuestionType.LIKERT) {
            this.getQuestions(i).push(
              this.formBuilder.group({
                likertQuestions: this.formBuilder.array([]),
              }),
            );

            for (let j = 0; j < question.question.length; j++) {
              ((this.getQuestions(i).controls[x] as FormGroup).controls.likertQuestions as FormArray).push(
                this.formBuilder.group({
                  title: this.formBuilder.control(question.question[j].question),
                  answer: this.formBuilder.control(question.question[j].answer, [Validators.required]),
                }),
              );
            }
          } else {
            this.getQuestions(i).push(
              this.formBuilder.group({
                title: this.formBuilder.control(question.question),
                answer: this.formBuilder.control(question.answer, [Validators.required]),
              }),
            );
          }
        }
      }
      this.questionnaireStore.questionnaire = data.questionnaire;
      this.questionnaire = this.questionnaireStore.questionnaire;
    });
  }

  getQuestions(sectionId: number): FormArray {
    return this.myForms[sectionId].controls.questions as FormArray;
  }

  public completedStep(index: number): boolean {
    return index < this.questionnaire.currentQuestionnaireSectionId;
  }

  public navigateToIntroduction(): void {
    this.router.navigate(['questionnaire/' + this.questionnaire.id + '/introduction']);
  }

  public navigateToQuestions(section: number = 0) {
    this.router.navigate(['questionnaire/' + this.questionnaire.id + '/questions'], {
      queryParams: { section: section },
    });
  }

  public navigateToLastQuestion() {
    this.navigateToQuestions(this.questionnaire.questionnaireSections.length - 1);
  }

  public navigateToResults(): void {
    this.router.navigate(['questionnaire/' + this.questionnaire.id + '/results']);
  }

  public getQuestionSections(): QuestionnaireSection[] {
    return this.questionnaire.questionnaireSections;
  }

  public isFirstSection(): boolean {
    return this.questionnaire.currentQuestionnaireSectionId === 1;
  }

  public isLastSection(): boolean {
    return this.questionnaire.currentQuestionnaireSectionId === this.questionnaire.questionnaireSections.length;
  }

  public validateQuestionnaire(): boolean {
    for (let i = 0; i < this.questionnaire.questionnaireSections.length; i++) {
      if (!this.validateSection(i)) {
        return false;
      }
    }

    return true;
  }

  public navigateBack(): void {
    if (this.isFirstSection()) {
      this.navigateToIntroduction();
    } else {
      this.navigateToQuestions(this.questionnaire.currentQuestionnaireSectionId - 2);
      this.questionnaire.currentQuestionnaireSectionId--;
    }
  }

  private saveQuestionnaire() {
    //api.post('questionnaire', data: {this.questionnaire})
  }

  public navigateForward(): void {
    if (this.isLastSection()) {
      this.navigateToResults();
    } else {
      this.navigateToQuestions(this.questionnaire.currentQuestionnaireSectionId);
      this.questionnaire.currentQuestionnaireSectionId++;
    }
  }

  public getPreviousButtonText(): string {
    return 'Vorige';
  }

  public getNextButtonText(): string {
    return 'Volgende';
  }

  public validateSection(sectionId: number) {
    return this.myForms[sectionId].controls.questions.status === 'VALID';
  }
}
