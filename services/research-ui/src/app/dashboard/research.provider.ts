import { Injectable } from '@angular/core';
import { Research } from './models/research';
import { SortingTypes } from './models/sortingTypes';

@Injectable()
export class ResearchProvider {
  getResearches(): Research[] {
    throw new Error('Method not implemented.');
  }
  getResearch(id: number): Research {
    throw new Error('Method not implemented.');
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
  searchResearch(searchTerm: string): Research[] {
    throw new Error('Method not implemented');
  }
  orderResearch(order: SortingTypes, data: Research[]): Research[] {
    throw new Error('Method not implemented');
  }
}
