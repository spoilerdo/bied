import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairePaginatorComponent } from './questionnaire-paginator.component';

describe('QuestionnairePaginatorComponent', () => {
  let component: QuestionnairePaginatorComponent;
  let fixture: ComponentFixture<QuestionnairePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
