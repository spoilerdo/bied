import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBranchStepComponent } from './select-branch-step.component';

describe('SelectBranchStepComponent', () => {
  let component: SelectBranchStepComponent;
  let fixture: ComponentFixture<SelectBranchStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBranchStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBranchStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
