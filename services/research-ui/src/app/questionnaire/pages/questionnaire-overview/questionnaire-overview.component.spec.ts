import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';
import {
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbIconModule,
  NbListModule,
  NbToggleModule,
  NbContextMenuModule,
  NbActionsModule,
  NbTooltipModule,
  NbCheckboxModule,
  NbRadioModule,
} from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { PaginatePipe, NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from 'src/app/@core/pagination/pagination.component';
import { of } from 'rxjs';

fdescribe('QuestionnaireOverviewComponent', () => {
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
