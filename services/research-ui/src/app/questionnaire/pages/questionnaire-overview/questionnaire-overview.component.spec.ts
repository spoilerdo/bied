import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';
import { NbCardModule } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';

describe('QuestionnaireOverviewComponent', () => {
  let component: QuestionnaireOverviewComponent;
  let fixture: ComponentFixture<QuestionnaireOverviewComponent>;

  const mockActivatedRoute = {
    queryParamMap: of({ get: () => 2 }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionnaireOverviewComponent],
      imports: [
        NbCardModule,
        RouterTestingModule.withRoutes([{ path: 'questionnaire/overview', component: QuestionnaireOverviewComponent }]),
        NgxPaginationModule,
      ],
      providers: [
        QuestionnaireService,
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be page 2', () => {
    component.getQueryParams();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.page).toEqual(2);
    });
  });
});
