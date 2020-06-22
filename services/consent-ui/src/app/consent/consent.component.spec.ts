import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { ConsentComponent } from './consent.component';
import { ConsentProvider } from '../providers/consent.provider';
import { DatasourceProvider } from '../providers/datasource.provider';
import { Consent } from '../models/consent';
import { Datasource } from '../models/datasource';
import { DebugElement } from '@angular/core';

describe('ConsentComponent', () => {
  const consent: Consent = Object.assign(new Consent, ({
    id: '1',
    userId: '1',
    consent: true,
    uts: new Date(),
    datasourceId: '1'
  }));

  const datasource: Datasource = Object.assign(new Datasource, ({
    id: '1',
    name: 'Twitter data',
    description: "Fetches information about the tweets you make on twitter",
    reference: "1",
    active: true
  }))

  let component: ConsentComponent;
  let fixture: ComponentFixture<ConsentComponent>;
  let el: HTMLElement;
  let de: DebugElement;

  let consentProviderStub, datasourceProviderStub: any;


  beforeEach(async(() => {
    consentProviderStub = {
      getConsentById: () => consent
    }

    datasourceProviderStub = {
      getDatasourceById: () => datasource
    }

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConsentComponent],
      providers: [{ provide: ConsentProvider, useValue: consentProviderStub }, { provide: DatasourceProvider, useValue: datasourceProviderStub }]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ConsentComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;

        component.items = [];        
        component.consent = consent;
        component.consent.consent = true;

        component.id = '1';
        fixture.detectChanges();
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Switch consent method', () => {
    it('should switch consent', () => {          
      expect(component.consent.consent).toBeTrue();

      component.switchConsent();

      expect(component.consent.consent).toBeFalse();

      component.switchConsent();

      expect(component.consent.consent).toBeTrue();
    });

    it('should add consent withdrawn message', () => {
      expect(component.items.length).toBe(1);
      expect(component.items[0].header).toEqual('Consent given')
      
      component.switchConsent();

      expect(component.items.length).toBe(2);
      expect(component.items[0].header).toEqual('Consent withdrawn') // Also index 0, because newest items appear first
    })
  })
});
