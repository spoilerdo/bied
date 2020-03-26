import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire-paginator',
  templateUrl: './questionnaire-paginator.component.html',
  styleUrls: ['./questionnaire-paginator.component.scss'],
})
export class QuestionnairePaginatorComponent implements OnInit {
  currentPage: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getQueryParams();
  }

  getQueryParams() {
    this.route.queryParamMap.subscribe(params => {
      this.currentPage = +params.get('page') || 0;
    });
  }

  selectPage(page: number) {
    page = page <= 0 ? 0 : page;
    this.router.navigate(['/questionnaire/overview'], { queryParams: { page } });
  }
}
