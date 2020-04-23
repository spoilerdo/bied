import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentDetailsHeaderComponent } from './consent-details-header.component';

describe('ConsentDetailsHeaderComponent', () => {
  let component: ConsentDetailsHeaderComponent;
  let fixture: ComponentFixture<ConsentDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
