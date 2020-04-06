import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertGroupComponent } from './likert-group.component';
import { NbThemeModule, NbRadioModule } from '@nebular/theme';

describe('LikertGroupComponent', () => {
  let component: LikertGroupComponent;
  let fixture: ComponentFixture<LikertGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikertGroupComponent],
      imports: [NbThemeModule.forRoot(), NbRadioModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikertGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
