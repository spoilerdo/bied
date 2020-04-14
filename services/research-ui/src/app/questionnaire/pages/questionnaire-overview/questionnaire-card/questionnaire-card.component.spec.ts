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
import { By } from '@angular/platform-browser';

describe('QuestionnaireCardComponent', () => {
  let component: QuestionnaireCardComponent;
  let fixture: ComponentFixture<QuestionnaireCardComponent>;
  let mockDialogService = {
    open: () => {},
  };

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
      providers: [{ provide: NbDialogService, useValue: mockDialogService }, NbMenuService],
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

  it('should call openRenameDialog', () => {
    spyOn(component, 'openRenameDialog');
    fixture.debugElement.query(By.css('#questionnaire-card-rename')).triggerEventHandler('click', null);
    expect(component.openRenameDialog).toHaveBeenCalled();
  });

  it('should call openRemoveConfirmation', () => {
    spyOn(component, 'openRemoveConfirmation');
    fixture.debugElement.query(By.css('#questionnaire-card-remove')).triggerEventHandler('click', null);
    expect(component.openRemoveConfirmation).toHaveBeenCalled();
  });

  it('should call duplicateQuestionnaire', () => {
    spyOn(component, 'duplicateQuestionnaire');
    fixture.debugElement.query(By.css('#questionnaire-card-copy')).triggerEventHandler('click', null);
    expect(component.duplicateQuestionnaire).toHaveBeenCalled();
  });

  it('should call openCardpopup', () => {
    spyOn(component, 'openCardPopup');
    fixture.debugElement.query(By.css('#questionnaire-card-open')).triggerEventHandler('click', null);
    expect(component.openCardPopup).toHaveBeenCalled();
  });
});
