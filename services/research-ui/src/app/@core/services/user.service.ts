export class UserProvider {
  async getFullnameById(id: number): Promise<string> {
    console.warn('#getFullnameById is not implemented!');
    return 'John Doe';
  }
}
