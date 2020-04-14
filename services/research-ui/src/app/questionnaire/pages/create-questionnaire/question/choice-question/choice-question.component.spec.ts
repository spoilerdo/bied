import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceQuestionComponent } from './choice-question.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NbLayoutDirectionService, NbListModule, NbToggleModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChoiceQuestionComponent', () => {
  let component: ChoiceQuestionComponent;
  let fixture: ComponentFixture<ChoiceQuestionComponent>;
  const defaultOption = { label: 'Option 1', value: 'option1' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbListModule, NbToggleModule, BrowserAnimationsModule, ReactiveFormsModule],
      declarations: [ChoiceQuestionComponent],
      providers: [FormBuilder, NbLayoutDirectionService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceQuestionComponent);
    component = fixture.componentInstance;
    component.questionDataForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should have the correct form fields', () => {
    expect(component.f.multi).toBeTruthy();
    expect(component.f.options).toBeTruthy();
  });

  it('should have the correct default values', () => {
    expect(component.f.multi.value).toBeFalsy();
    expect(component.f.options.value).toEqual([defaultOption]);
  });

  describe('addOption', () => {
    it('should add an option', () => {
      expect(component.options.length).toEqual(1);

      component.addOption();

      expect(component.options.length).toEqual(2);
      expect(component.options.value).toEqual([defaultOption, { label: 'Option 2', value: 'option2' }]);
    });
  });

  describe('removeOption', () => {
    it('should remove an option with valid index', () => {
      expect(component.options.length).toEqual(1);
      component.addOption();
      expect(component.options.length).toEqual(2);
      component.removeOption(1);
      expect(component.options.length).toEqual(1);
      expect(component.options.value).toEqual([defaultOption]);
    });

    it('should throw an error with no valid index', () => {
      expect(component.options.length).toEqual(1);
      expect(() => component.removeOption(1)).toThrow(new Error('Index out of bounds'));
    });
  });
});
