import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { QuestionnaireStore } from 'src/app/store/questionnaire.store';

@Component({
  selector: 'app-introduction-step',
  templateUrl: './introduction-step.component.html',
  styleUrls: ['./introduction-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionStepComponent implements OnInit {
  @Input()
  public questionnaire: Questionnaire;

  constructor() {}

  async ngOnInit(): Promise<void> {}
}
