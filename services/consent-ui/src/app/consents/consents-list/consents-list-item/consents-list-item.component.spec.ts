import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentsListItemComponent } from './consents-list-item.component';

describe('ConsentsListItemComponent', () => {
  let component: ConsentsListItemComponent;
  let fixture: ComponentFixture<ConsentsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
