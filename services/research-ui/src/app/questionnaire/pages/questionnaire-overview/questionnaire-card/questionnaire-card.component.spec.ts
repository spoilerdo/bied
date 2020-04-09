import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireCardComponent } from './questionnaire-card.component';
import {
  NbDialogService,
  NbMenuService,
  NbThemeModule,
  NbCardModule,
  NbIconModule,
  NbActionsModule,
  NbContextMenuModule,
} from '@nebular/theme';
import { TruncatePipe } from 'src/app/questionnaire/utils/TruncatePipe';
import { NbEvaIconsModule } from '@nebular/eva-icons';

describe('QuestionnaireCardComponent', () => {
  let component: QuestionnaireCardComponent;
  let fixture: ComponentFixture<QuestionnaireCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionnaireCardComponent, TruncatePipe],
      imports: [
        NbThemeModule.forRoot(),
        NbCardModule,
        NbActionsModule,
        NbContextMenuModule,
        NbIconModule,
        NbEvaIconsModule,
      ],
      providers: [{ provide: NbDialogService, useValue: {} }, NbMenuService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireCardComponent);
    component = fixture.componentInstance;
    component.questionnaire = {
      id: 1,
      name: 'test',
      description: 'this is a description',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
