import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire-overview',
  templateUrl: './questionnaire-overview.component.html',
  styleUrls: ['./questionnaire-overview.component.scss'],
})
export class QuestionnaireOverviewComponent implements OnInit {
  questionnaires: Questionnaire[];
  page: number;

  constructor(private questionnaireService: QuestionnaireService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getQueryParams();
    this.getQuestionnaires();
  }

  getQueryParams() {
    this.route.queryParamMap.subscribe(params => {
      this.page = +params.get('page') || 0;
    });
  }

  getQuestionnaires(): void {
    this.questionnaireService
      .getQuestionnaires(this.page)
      .subscribe(questionnaires => (this.questionnaires = questionnaires));
  }
}
