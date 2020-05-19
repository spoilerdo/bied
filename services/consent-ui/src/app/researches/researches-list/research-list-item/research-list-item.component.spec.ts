import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchListItemComponent } from './research-list-item.component';
import { Research } from 'src/app/models/research';
import { Datasource } from 'src/app/models/datasource';

describe('ResearchListItemComponent', () => {
  const research: Research = Object.assign(new Research(), (
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

  let component: ResearchListItemComponent;
  let fixture: ComponentFixture<ResearchListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchListItemComponent);
    component = fixture.componentInstance;
    component.research = research;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.startString).toBe(`Starts: today at ${research.startDate.toLocaleTimeString('nl')}`)
    expect(component.finishString).toBe(`Finishes: today at ${research.endDate.toLocaleTimeString('nl')}`)
  });
});
