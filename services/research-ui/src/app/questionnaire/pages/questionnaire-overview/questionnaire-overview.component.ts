import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-questionnaire-overview',
  templateUrl: './questionnaire-overview.component.html',
  styleUrls: ['./questionnaire-overview.component.scss'],
})
export class QuestionnaireOverviewComponent implements OnInit {
  questionnaires: Observable<Questionnaire[]>;
  page: number;
  totalQuestionnaires: number;

  constructor(
    private questionnaireService: QuestionnaireService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getQueryParams();
    this.getPage(this.page);
  }

  getQueryParams() {
    this.route.queryParamMap.subscribe((params) => {
      this.page = +params.get('page') || 1;
    });
  }

  getPage(page: number) {
    this.questionnaires = this.questionnaireService.getQuestionnaires(page, 20).pipe(
      tap((res) => {
        this.totalQuestionnaires = res.totalItems;
        this.page = page;
        this.router.navigate(['/questionnaire/overview'], { queryParams: { page } });
      }),
      map((res) => res.questionnaires),
    );
  }

  removeQuestionnaire(id: number) {
    this.questionnaireService.removeQuestionnaire(id);
    this.getPage(this.page);
  }

  renameQuestionnaire(response: any) {
    this.questionnaireService.renameQuestionnaire(response.id, response.name);
    this.getPage(this.page);
  }

  duplicateQuestionnaire(id: number) {
    this.questionnaireService.duplicateQuestionnaire(id);
    this.getPage(this.page);
  }
}
