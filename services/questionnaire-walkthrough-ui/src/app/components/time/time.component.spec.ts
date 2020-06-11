import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeComponent } from './time.component';
import { NbIconModule, NbThemeModule, NbIconComponent } from '@nebular/theme';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeComponent, NbIconComponent],
      imports: [NbThemeModule.forRoot(), NbIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
