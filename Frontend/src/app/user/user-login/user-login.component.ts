import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertyfyService } from 'src/app/service/alertyfy.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
    private alertyfy: AlertyfyService
  ) {}

  ngOnInit() {}

  onSubmit(loginForm: NgForm) {
    const token = this.auth.AuthService(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.username);
      this.alertyfy.success('Successfully login');
      this.router.navigate(['/']);
    } else {
      this.alertyfy.error('Name and password is incorrect');
    }
  }
}
