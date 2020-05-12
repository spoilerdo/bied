import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourceListItemComponent } from './datasource-list-item.component';
import { Consent } from 'src/app/models/consent';
import { ConsentProvider } from 'src/app/providers/consent.provider';
import { Datasource } from 'src/app/models/datasource';

describe('DatasourceListItemComponent', () => {
  const consent: Consent = Object.assign(new Consent, ({
    id: '1',
    userId: '1',
    consent: true,
    uts: new Date(2020, 4, 9),
    datasourceId: '1',
    datasource: Object.assign(new Datasource, ({
      id: '1',
      name: 'Twitter data',
      description: "Fetches information about the tweets you make on twitter",
      reference: "1",
      active: true
    }))
  }));

  let component: DatasourceListItemComponent;
  let fixture: ComponentFixture<DatasourceListItemComponent>;

  let consentProviderStub: any;

  beforeEach(async(() => {
    consentProviderStub = {
      getUserConsentForDatasource: () => consent
    }
    TestBed.configureTestingModule({
      declarations: [DatasourceListItemComponent],
      providers: [{ provide: ConsentProvider, useValue: consentProviderStub }]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DatasourceListItemComponent);
        component = fixture.componentInstance;
        component.datasource = consent.datasource;
        component.consent = consent
        fixture.detectChanges();
      })
  }));

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should return uts as date string', () => {
    component.consent.uts = new Date(2020, 4, 9)
    expect(component.getDateString()).toEqual("9-5-2020")
  })

  it('should return "-" with invalid input', () => {
    component.consent.uts = null;
    expect(component.getDateString()).toEqual('-');
  })
});
