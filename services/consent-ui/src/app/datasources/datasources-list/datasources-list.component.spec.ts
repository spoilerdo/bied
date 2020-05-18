import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcesListComponent } from './datasources-list.component';
import { Datasource } from 'src/app/models/datasource';
import { ResearchProvider } from 'src/app/providers/research.provider';
import { DatasourceProvider } from 'src/app/providers/datasource.provider';
import { Research } from 'src/app/models/research';

describe('DatasourcesListComponent', () => {
  const research: Research = Object.assign(new Research, (
    {
      id: '1',
      name: 'Eenzaamheids onderzoek',
      description: 'Onderzoek naar eenzaamheid onder jongere',
      imageUrl: `https://www.jvc-julianadorp.nl/wp-content/uploads/20161129enquete_.jpg`,
      startDate: new Date(),
      endDate: new Date(),
      active: true,
      ownerId: '1',
      datasources: [
        Object.assign(new Datasource(), (
          {
            id: '1',
            name: 'Twitter data',
            description: "Fetches information about the tweets you make on twitter",
            reference: "1",
            active: true
          }
        ))
      ]
    }
  ));  

  let component: DatasourcesListComponent;
  let fixture: ComponentFixture<DatasourcesListComponent>;

  let researchProviderStub, datasourceProviderStub: any;

  beforeEach(async(() => {
    researchProviderStub = {
      getResearchById: () => research
    }
    datasourceProviderStub = {
      getDatasources: () => []
    }

    TestBed.configureTestingModule({
      declarations: [DatasourcesListComponent],
      providers: [{ provide: ResearchProvider, useValue: researchProviderStub }, { provide: DatasourceProvider, useValue: datasourceProviderStub }]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DatasourcesListComponent);
        component = fixture.componentInstance;
        component.researchId = '1';
        fixture.detectChanges();
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.datasources).toBe(research.datasources)
  });
});
