import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentTimelineComponent } from './consent-timeline.component';

describe('ConsentTimelineComponent', () => {
  let component: ConsentTimelineComponent;
  let fixture: ComponentFixture<ConsentTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
