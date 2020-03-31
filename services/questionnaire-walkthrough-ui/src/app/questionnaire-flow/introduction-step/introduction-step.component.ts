import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';

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