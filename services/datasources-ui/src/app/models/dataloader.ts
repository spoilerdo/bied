export class Dataloader {
  id: number;
  name: string;
  createdAt: Date;

  static fromJson(data: any) {
    const dataloader = Object.assign(new this(), data);

    return dataloader;
  }
}