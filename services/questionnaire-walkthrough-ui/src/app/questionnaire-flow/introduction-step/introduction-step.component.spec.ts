import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionStepComponent } from './introduction-step.component';

describe('IntroductionStepComponent', () => {
  let component: IntroductionStepComponent;
  let fixture: ComponentFixture<IntroductionStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
