import { Component, OnInit, Input } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss'],
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() questionnaire: Questionnaire;
  url = '';
  cardContextItems = [{ title: 'Rename' }, { title: 'Duplicate' }, { title: 'Delete' }];

  constructor() {}

  ngOnInit(): void {
    // Match URL with real url
    this.url = `/questionnaire/${this.questionnaire.id}`;
  }
}
