import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbIconModule, NbSelectModule, NbThemeModule, NbToggleModule } from '@nebular/theme';
import { CoreModule } from '../../../../@core/core.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NbThemeModule.forRoot(),
        NbCardModule,
        NbSelectModule,
        NbIconModule,
        NbEvaIconsModule,
        NbToggleModule,
      ],
      declarations: [QuestionComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.questionForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
