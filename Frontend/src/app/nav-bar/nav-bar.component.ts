import { Component } from '@angular/core';
import { AlertyfyService } from '../service/alertyfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  loggedinUser: string | null = "";
  constructor(private alertyfy:AlertyfyService) {}

  onLogin() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem("token");
    this.alertyfy.success("You are logged out !");
  }
}
