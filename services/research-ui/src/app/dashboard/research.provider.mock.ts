import { Injectable } from '@angular/core';
import { Research } from './models/research';
import { ResearchProvider } from './research.provider';
import * as moment from 'moment';
import { SortingTypes } from './models/orderTypes';
import { SortArrObj, Arrangement } from '../Utility';

@Injectable()
export class ResearchMockProvider extends ResearchProvider {
  private readonly store: { [index: number]: Research } = {
    0: Object.assign(new Research(), {
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
    1: Object.assign(new Research(), {
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
    2: Object.assign(new Research(), {
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
    3: Object.assign(new Research(), {
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
  };

  getResearches(): Research[] {
    return Object.values(this.store);
  }
  getResearch(id: number): Research {
    return this.store[id];
  }
  createResearch(): Research {
    throw new Error('Method not implemented.');
  }
  editResearch(): Research {
    throw new Error('Method not implemented.');
  }
  deleteResearch(): void {
    throw new Error('Method not implemented.');
  }
  addDatasourceToResearch(): Research {
    throw new Error('Method not implemented.');
  }
  removeDatasourceFromResearch(): Research {
    throw new Error('Method not implemented.');
  }
  inviteUsersToResearch(): void {
    throw new Error('Method not implemented.');
  }
  searchResearch(searchValue: string): Research[] {
    const dataArr = Object.values(this.store);
    const regexp = new RegExp(searchValue, 'i');
    if (searchValue.length > 0) {
      return dataArr.filter((e) => regexp.test(e.name));
    }
    return dataArr;
  }

  orderResearch(order: SortingTypes, data: Research[]): Research[] {
    switch (order) {
      // START SORTING ON END DATE
      case SortingTypes.DATEA:
        return SortArrObj(data, 'endDate', Arrangement.ASCENDING);
      case SortingTypes.DATEZ:
        return SortArrObj(data, 'endDate', Arrangement.DESCENDING);

      // START SORTING ON ALPHABETICAL ORDER
      case SortingTypes.ALFAA:
        return SortArrObj(data, 'name', Arrangement.ASCENDING);
      case SortingTypes.ALFAZ:
        return SortArrObj(data, 'name', Arrangement.DESCENDING);

      default:
        return SortArrObj(data, 'name', Arrangement.ASCENDING);
    }
  }
}
