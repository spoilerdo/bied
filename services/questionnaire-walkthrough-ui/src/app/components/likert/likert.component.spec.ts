import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertComponent } from './likert.component';
import { NbRadioModule, NbThemeModule } from '@nebular/theme';

describe('LikertComponent', () => {
  let component: LikertComponent;
  let fixture: ComponentFixture<LikertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikertComponent],
      imports: [NbThemeModule.forRoot(), NbRadioModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
