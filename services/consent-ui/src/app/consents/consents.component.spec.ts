import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentsComponent } from './consents.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConsentsComponent', () => {
  let component: ConsentsComponent;
  let fixture: ComponentFixture<ConsentsComponent>;
  let el: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConsentsComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ConsentsComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
      })
  }));

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
