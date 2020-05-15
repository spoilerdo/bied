import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoaderStepComponent } from './data-loader-step.component';

describe('DataLoaderStepComponent', () => {
  let component: DataLoaderStepComponent;
  let fixture: ComponentFixture<DataLoaderStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLoaderStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLoaderStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
