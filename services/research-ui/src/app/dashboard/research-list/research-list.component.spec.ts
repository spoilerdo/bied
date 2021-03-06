import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResearchListComponent } from './research-list.component';
import { Research } from '../../models/research';
import * as moment from 'moment';
import { ResearchListModule } from './research-list.module';
import { DebugElement } from '@angular/core';

describe('ResearchListComponent', () => {
  const researches: Research[] = [
    Object.assign(new Research(), {
      id: 0,
      name: 'Identifying the mockability of services',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla tincidunt orci, eget tristique magna finibus nec. Pellentesque nec finibus dolor, vel commodo ligula. Sed vulputate non metus mollis accumsan. Proin vel elit nec tellus dapibus placerat. Nullam porta dui id elit venenatis, in porta urna fringilla.',
      imageUrl: 'https://picsum.photos/200/300?random=1',
      startDate: moment().subtract(10, 'days').toDate(),
      endDate: moment().add(14, 'days').toDate(),
      active: true,
      ownerId: 0,
    }),
    Object.assign(new Research(), {
      id: 1,
      name: 'Spreading and containing a global pandemic',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla tincidunt orci, eget tristique magna finibus nec. Pellentesque nec finibus dolor, vel commodo ligula. Sed vulputate non metus mollis accumsan. Proin vel elit nec tellus dapibus placerat. Nullam porta dui id elit venenatis, in porta urna fringilla.',
      imageUrl: 'https://picsum.photos/200/300?random=2',
      startDate: moment().add(5, 'days').toDate(),
      endDate: moment().add(19, 'days').toDate(),
      active: true,
      ownerId: 0,
    }),
    Object.assign(new Research(), {
      id: 2,
      name: 'Invloed van Lockdown op sociaal contact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla tincidunt orci, eget tristique magna finibus nec. Pellentesque nec finibus dolor, vel commodo ligula. Sed vulputate non metus mollis accumsan. Proin vel elit nec tellus dapibus placerat. Nullam porta dui id elit venenatis, in porta urna fringilla.',
      imageUrl: 'https://picsum.photos/200/300?random=3',
      startDate: moment().subtract(2, 'days').toDate(),
      endDate: moment().add(3, 'days').toDate(),
      active: true,
      ownerId: 0,
    }),
    Object.assign(new Research(), {
      id: 3,
      name: 'Gedrag jongeren naar aanleiding van vuurwerkverbod',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla tincidunt orci, eget tristique magna finibus nec. Pellentesque nec finibus dolor, vel commodo ligula. Sed vulputate non metus mollis accumsan. Proin vel elit nec tellus dapibus placerat. Nullam porta dui id elit venenatis, in porta urna fringilla.',
      imageUrl: 'https://picsum.photos/200/300?random=4',
      startDate: moment('2019-12-25', 'YYYY-MM-DD'),
      endDate: moment('2020-01-15', 'YYYY-MM-DD'),
      active: true,
      ownerId: 0,
    }),
  ];
  let fixture: ComponentFixture<ResearchListComponent>;
  let component: ResearchListComponent;
  let el: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ResearchListModule],
      declarations: [],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ResearchListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
      });
  }));

  it('should research-list-item for each research', () => {
    component.researches = researches;
    fixture.detectChanges();
    expect(el.querySelectorAll('research-list-item').length).toEqual(researches.length);
  });

  it('should render information (name/description/owner)', () => {
    component.researches = researches;
    fixture.detectChanges();
    const items = el.querySelectorAll('research-list-item');
    for (let i = 0; i < items.length; i++) {
      debugger;
      const item = items[i];
      expect(item.querySelector('.title').textContent).toEqual(researches[i].name);
      expect(item.querySelector('p.description').textContent).toEqual(researches[i].description);
      expect(item.querySelector('.lead-researcher').textContent).toEqual(researches[i].ownerId.toString());
    }
  });

  it('should render humanized date', () => {
    component.researches = researches;
    fixture.detectChanges();
    const items = el.querySelectorAll('research-list-item ngx-research-status span');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      expect(item.textContent).toBeTruthy();
    }
  });
});
