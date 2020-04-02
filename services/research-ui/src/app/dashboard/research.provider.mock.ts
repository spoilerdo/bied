import { Injectable } from '@angular/core';
import { Research } from './models/research.model';
import { ResearchProvider } from './research.provider';

@Injectable()
export class ResearchMockProvider extends ResearchProvider {
  GetResearches(): Research[] {
    throw new Error('Method not implemented.');
  }
  GetResearch(): Research {
    throw new Error('Method not implemented.');
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
