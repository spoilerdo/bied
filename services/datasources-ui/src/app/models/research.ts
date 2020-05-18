export class Research {
  id: number;
  name: string;

  static fromJson(data: any) {
    const research = Object.assign(new this(), data);

    return research;
  }
}
