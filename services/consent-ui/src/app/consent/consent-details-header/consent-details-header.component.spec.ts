import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentDetailsHeaderComponent } from './consent-details-header.component';
import { Consent } from 'src/app/models/consent';
import { Datasource } from 'src/app/models/datasource';
import { DebugElement } from '@angular/core';
import { ConsentComponent } from '../consent.component';
import { By } from '@angular/platform-browser';
import { NbToggleComponent } from '@nebular/theme';

describe('ConsentDetailsHeaderComponent', () => {
  const consent: Consent = Object.assign(new Consent, ({
    id: '1',
    userId: '1',
    consent: true,
    uts: new Date(),
    datasourceId: '1',
    datasource: Object.assign(new Datasource, ({
      id: '1',
      name: 'Twitter data',
      description: "Fetches information about the tweets you make on twitter",
      reference: "1",
      active: true
    }))
  }));

  let component: ConsentDetailsHeaderComponent;
  let fixture: ComponentFixture<ConsentDetailsHeaderComponent>;
  let el: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsentDetailsHeaderComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ConsentDetailsHeaderComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;

        component.consent = consent;
        fixture.detectChanges();
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the checked boolean', () => {
    expect(component.checked).toBe(consent.consent)
  })
});
