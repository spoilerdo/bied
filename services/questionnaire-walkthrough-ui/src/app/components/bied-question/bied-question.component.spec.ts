import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiedQuestionComponent } from './bied-question.component';

describe('BiedQuestionComponent', () => {
  let component: BiedQuestionComponent;
  let fixture: ComponentFixture<BiedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
