import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertComponent } from './likert.component';
import { NbThemeModule, NbRadioModule, NbIconComponent, NbIconModule } from '@nebular/theme';

describe('LikerComponent', () => {
  let component: LikertComponent;
  let fixture: ComponentFixture<LikertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikertComponent, NbIconComponent],
      imports: [NbThemeModule.forRoot(), NbIconModule, NbRadioModule],
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
