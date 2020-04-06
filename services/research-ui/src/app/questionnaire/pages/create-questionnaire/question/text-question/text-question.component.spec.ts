import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQuestionComponent } from './text-question.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbLayoutDirectionService, NbThemeModule, NbToggleModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TextQuestionComponent', () => {
  let component: TextQuestionComponent;
  let fixture: ComponentFixture<TextQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbThemeModule, NbToggleModule, BrowserAnimationsModule],
      declarations: [TextQuestionComponent],
      providers: [FormBuilder, NbLayoutDirectionService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextQuestionComponent);
    component = fixture.componentInstance;
    component.questionDataForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
