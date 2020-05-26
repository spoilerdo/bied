import { Datasource } from './datasource';

export class Consent {
  id: string;
  userId: string;
  consent: boolean;
  uts: Date;
  datasourceId: string;
  datasource?: Datasource;
}