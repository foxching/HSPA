import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  addUser(user: any) {
    let users: any[] = [];
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers) {
      users = JSON.parse(storedUsers);
      users = [...users, user];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
