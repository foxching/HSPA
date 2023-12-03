import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  AuthService(user: any) {
    let userArray: any[] = [];
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers) {
      userArray = JSON.parse(storedUsers);
    }
    return userArray.find(u => u.username === user.Name && u.password === user.Password)
  }
  
}
