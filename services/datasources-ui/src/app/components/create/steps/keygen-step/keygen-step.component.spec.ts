import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeygenStepComponent } from './keygen-step.component';

describe('KeygenStepComponent', () => {
  let component: KeygenStepComponent;
  let fixture: ComponentFixture<KeygenStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeygenStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeygenStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
