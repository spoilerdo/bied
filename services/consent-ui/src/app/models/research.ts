import { Datasource } from './datasource';

export class Research {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  active: boolean;
  ownerId: string;
  datasources: Datasource[];
}