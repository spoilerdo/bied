import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchListItemComponent } from './research-list-item.component';

describe('ResearchListItemComponent', () => {
  let component: ResearchListItemComponent;
  let fixture: ComponentFixture<ResearchListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
