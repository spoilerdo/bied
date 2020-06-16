export class Research {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  startDate: number;
  endDate: number;
  active: boolean;
  ownerId: string;
  owner?: string;
  // Datasource datasources = 9;
}
