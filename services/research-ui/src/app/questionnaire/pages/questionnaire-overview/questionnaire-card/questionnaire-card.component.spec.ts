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
  NbCardComponent,
} from '@nebular/theme';
import { TruncatePipe } from 'src/app/questionnaire/utils/TruncatePipe';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { By } from '@angular/platform-browser';

describe('QuestionnaireCardComponent', () => {
  let component: QuestionnaireCardComponent;
  let fixture: ComponentFixture<QuestionnaireCardComponent>;
  const mockDialogService = {
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

  describe('card actions', () => {
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
  });

  describe('card popup', () => {
    it('should call', () => {
      spyOn(component, 'openCardPopup');
      fixture.debugElement.query(By.css('#questionnaire-card-open')).triggerEventHandler('click', null);
      expect(component.openCardPopup).toHaveBeenCalled();
    });
  });

  describe('popup', () => {
    it('should not have class "popup"', () => {
      const card = fixture.debugElement.query(By.css('.questionnaire-card'));
      // tslint:disable-next-line: no-string-literal
      expect(card.classes['popup']).toBeFalsy();
    });

    it('should have class "popup"', () => {
      component.popup = true;
      fixture.detectChanges();
      const card = fixture.debugElement.query(By.css('.questionnaire-card'));
      // tslint:disable-next-line: no-string-literal
      expect(card.classes['popup']).toBeTruthy();
    });

    it('description should be truncated', () => {
      const cardBody = fixture.debugElement.query(By.css('.questionnaire-card')).query(By.css('nb-card-body'));
      expect(cardBody.properties.innerText).toContain('...');
    });

    it('description should not be truncated', () => {
      component.popup = true;
      fixture.detectChanges();
      const cardBody = fixture.debugElement.query(By.css('.questionnaire-card')).query(By.css('nb-card-body'));
      expect(cardBody.properties.innerText).not.toContain('...');
    });
  });
});
