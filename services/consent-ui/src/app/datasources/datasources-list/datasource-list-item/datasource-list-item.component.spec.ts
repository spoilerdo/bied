import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourceListItemComponent } from './datasource-list-item.component';

describe('DatasourceListItemComponent', () => {
  let component: DatasourceListItemComponent;
  let fixture: ComponentFixture<DatasourceListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasourceListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
