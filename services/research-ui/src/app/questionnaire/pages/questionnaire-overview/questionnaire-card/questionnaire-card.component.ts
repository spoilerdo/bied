import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss'],
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
