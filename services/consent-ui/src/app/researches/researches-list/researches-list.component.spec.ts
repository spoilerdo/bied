import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesListComponent } from './researches-list.component';
import { Research } from 'src/app/models/research';
import { Datasource } from 'src/app/models/datasource';
import { DatasourcesListComponent } from 'src/app/datasources/datasources-list/datasources-list.component';
import { ResearchProvider } from 'src/app/providers/research.provider';
import { DatasourceProvider } from 'src/app/providers/datasource.provider';

describe('ResearchesListComponent', () => {
  const researches: Research[] = [
    Object.assign(new Research, (
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
    ))
  ];

  let component: ResearchesListComponent;
  let fixture: ComponentFixture<ResearchesListComponent>;

  let researchProviderStub: any;

  beforeEach(async(() => {
    researchProviderStub = {
      getResearches: () => researches
    }

    TestBed.configureTestingModule({
      declarations: [ResearchesListComponent],
      providers: [{ provide: ResearchProvider, useValue: researchProviderStub }]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ResearchesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.researches.length).toBe(1)
  });
});
