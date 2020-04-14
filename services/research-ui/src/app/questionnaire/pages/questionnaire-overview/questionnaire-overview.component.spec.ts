import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';
import { NbCardModule } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';
import { Questionnaire } from 'src/app/models/questionnaire';
import { questionnaires } from 'src/app/services/mock-questionnaires';

fdescribe('QuestionnaireOverviewComponent', () => {
  let component: QuestionnaireOverviewComponent;
  let fixture: ComponentFixture<QuestionnaireOverviewComponent>;

  const mockActivatedRoute = {
    queryParamMap: of({ get: () => 1 }),
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

  it('Should be page 1', (done) => {
    component.getQueryParams();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.page).toEqual(1);
      done();
    });
  });

  it('GetPage should get the new questionnaires', (done) => {
    component.getPage(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.page).toEqual(1);
      expect(component.questionnaires.subscribe((questionnaires) => questionnaires.length === 20));
      expect(component.questionnaires.subscribe((questionnaires) => questionnaires[0].id === 1));
      done();
    });
  });

  describe('removeQuestionnaire', () => {
    it('should remove a questionnaire from the list', (done) => {
      let questionnaire: Questionnaire;
      component.questionnaires.subscribe((questionnaires) => (questionnaire = questionnaires[0]));

      component.removeQuestionnaire(questionnaire.id);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.page).toEqual(1);
        component.questionnaires.subscribe((questionnaires) => expect(questionnaires.length).toEqual(20));
        component.questionnaires.subscribe((questionnaires) =>
          expect(questionnaires[0].id).toEqual(questionnaire.id + 1),
        );
        done();
      });
    });
  });

  describe('renameQuestionnaire', () => {
    it('should rename a questionnaire', (done) => {
      let questionnaire: Questionnaire;
      component.questionnaires.subscribe((questionnaires) => (questionnaire = questionnaires[0]));

      component.renameQuestionnaire({ id: questionnaire.id, name: 'test' });
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.page).toEqual(1);
        component.questionnaires.subscribe((questionnaires) => expect(questionnaires.length).toEqual(20));
        component.questionnaires.subscribe((questionnaires) => expect(questionnaires[0].id).toEqual(questionnaire.id));
        component.questionnaires.subscribe((questionnaires) => expect(questionnaires[0].name).toEqual('test'));
        done();
      });
    });
  });

  describe('duplicateQuestionnaire', () => {
    it('should duplicate a questionnaire', (done) => {
      let questionnaire: Questionnaire;
      component.questionnaires.subscribe((questionnaires) => (questionnaire = questionnaires[0]));

      component.duplicateQuestionnaire(questionnaire.id);
      component.getPage(Math.ceil((component.totalQuestionnaires + 1) / 20));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.questionnaires.subscribe((questionnaires) => {
          expect(questionnaires[questionnaires.length - 1].name).toEqual(questionnaire.name);
          done();
        });
      });
    });
  });
});
