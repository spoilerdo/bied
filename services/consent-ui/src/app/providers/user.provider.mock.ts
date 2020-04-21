import { Injectable } from "@angular/core";
import { UserProvider } from './user.provider';

@Injectable()
export class UserMockProvider extends UserProvider {
  private readonly store: any[] = [
    {
      id: '1',
      first_name: 'Mike',
      last_name: 'Manders',
      age: 20,
      email: 'mikemanders1999@gmail.com'
    }
  ];

  getUserById(userId: string) {
    return this.store.find(x => x.id === userId);
  }
}