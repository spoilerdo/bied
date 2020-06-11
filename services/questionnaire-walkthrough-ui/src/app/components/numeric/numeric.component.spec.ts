import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericComponent } from './numeric.component';
import { NbIconComponent, NbIconModule, NbThemeModule } from '@nebular/theme';

describe('NumericComponent', () => {
  let component: NumericComponent;
  let fixture: ComponentFixture<NumericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumericComponent, NbIconComponent],
      imports: [NbThemeModule.forRoot(), NbIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
