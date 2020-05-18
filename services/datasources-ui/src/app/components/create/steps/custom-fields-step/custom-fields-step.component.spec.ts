import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldsStepComponent } from './custom-fields-step.component';

describe('CustomFieldsStepComponent', () => {
  let component: CustomFieldsStepComponent;
  let fixture: ComponentFixture<CustomFieldsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFieldsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFieldsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
