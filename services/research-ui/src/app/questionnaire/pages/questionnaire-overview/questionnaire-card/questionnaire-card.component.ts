import { Component, OnInit, Input } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss'],
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() questionnaire: Questionnaire;

  constructor() {}

  ngOnInit(): void {}
}
