import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentsListComponent } from './consents-list.component';

describe('ConsentsListComponent', () => {
  let component: ConsentsListComponent;
  let fixture: ComponentFixture<ConsentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
