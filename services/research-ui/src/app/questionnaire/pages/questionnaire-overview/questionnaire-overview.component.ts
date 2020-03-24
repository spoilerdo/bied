import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { Questionnaire } from 'src/app/models/questionnaire';

@Component({
  selector: 'app-questionnaire-overview',
  templateUrl: './questionnaire-overview.component.html',
  styleUrls: ['./questionnaire-overview.component.scss'],
})
export class QuestionnaireOverviewComponent implements OnInit {
  questionnaires: Questionnaire[];

  constructor(private questionnaireService: QuestionnaireService) {}

  ngOnInit(): void {
    this.getQuestionnaires();
  }

  getQuestionnaires(): void {
    this.questionnaireService.getQuestionnaires().subscribe(questionnaires => (this.questionnaires = questionnaires));
  }
}
