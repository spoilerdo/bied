import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentsListComponent } from './consents-list.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ConsentProvider } from 'src/app/providers/consent.provider';
import { Consent } from 'src/app/models/consent';

describe('ConsentsListComponent', () => {
  const consents: Consent[] = [
    Object.assign(new Consent, ({
      id: '1',
      userId: '1',
      consent: true,
      uts: new Date(),
      datasourceId: '1'
    })),
    Object.assign(new Consent, ({
      id: '2',
      userId: '1',
      consent: false,
      uts: new Date(),
      datasourceId: '2'
    }))
  ]

  let component: ConsentsListComponent;
  let fixture: ComponentFixture<ConsentsListComponent>;
  let el: HTMLElement;
  let de: DebugElement;

  let consentProviderStub: any;


  beforeEach(async(() => {
    consentProviderStub = {
      getConsentsForUser: () => consents
    }

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConsentsListComponent],
      providers: [{ provide: ConsentProvider, useValue: consentProviderStub }]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ConsentsListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
      })
  }));

  it('should contain list of consent-list-items', () => {
    component.consents = consents;
    fixture.detectChanges();
    expect(el.querySelectorAll('app-consents-list-item').length).toEqual(consents.length);

    expect(component.consents.length).toBe(2)
  });
});
