import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentsListItemComponent } from './consents-list-item.component';
import { Consent } from 'src/app/models/consent';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Datasource } from 'src/app/models/datasource';

describe('ConsentsListItemComponent', () => {
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

  let component: ConsentsListItemComponent;
  let fixture: ComponentFixture<ConsentsListItemComponent>;
  let el: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConsentsListItemComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ConsentsListItemComponent);
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
});
