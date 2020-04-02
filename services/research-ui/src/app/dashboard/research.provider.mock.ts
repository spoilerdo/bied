import { Injectable } from '@angular/core';
import { Research } from './models/research.model';
import { ResearchProvider } from './research.provider';
import * as moment from 'moment';

@Injectable()
export class ResearchMockProvider extends ResearchProvider {
  private readonly store: { [index: number]: Research } = {
    0: Object.assign(new Research(), {
      id: 0,
      name: 'Identifying the mockability of services',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla tincidunt orci, eget tristique magna finibus nec. Pellentesque nec finibus dolor, vel commodo ligula. Sed vulputate non metus mollis accumsan. Proin vel elit nec tellus dapibus placerat. Nullam porta dui id elit venenatis, in porta urna fringilla.',
      imageUrl: null,
      startDate: moment()
        .subtract(10, 'days')
        .toDate(),
      endDate: moment()
        .add(14, 'days')
        .toDate(),
      active: true,
      ownerId: 0,
    }),
    1: Object.assign(new Research(), {
      id: 1,
      name: 'Spreading and containing a global pandemic',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla tincidunt orci, eget tristique magna finibus nec. Pellentesque nec finibus dolor, vel commodo ligula. Sed vulputate non metus mollis accumsan. Proin vel elit nec tellus dapibus placerat. Nullam porta dui id elit venenatis, in porta urna fringilla.',
      imageUrl: null,
      startDate: moment()
        .add(5, 'days')
        .toDate(),
      endDate: moment()
        .add(19, 'days')
        .toDate(),
      active: true,
      ownerId: 0,
    }),
  };

  GetResearches(): Research[] {
    return Object.values(this.store);
  }
  GetResearch(id: number): Research {
    return this.store[id];
  }
  CreateResearch(): Research {
    throw new Error('Method not implemented.');
  }
  EditResearch(): Research {
    throw new Error('Method not implemented.');
  }
  DeleteResearch(): void {
    throw new Error('Method not implemented.');
  }
  AddDatasourceToResearch(): Research {
    throw new Error('Method not implemented.');
  }
  RemoveDatasourceFromResearch(): Research {
    throw new Error('Method not implemented.');
  }
  InviteUsersToResearch(): void {
    throw new Error('Method not implemented.');
  }
}
