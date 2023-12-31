import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  AbstractControl,
  ValidatorFn,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { AlertyfyService } from 'src/app/service/alertyfy.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  registrationForm!: FormGroup;
  user: User | undefined;
  isUserSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertyfy: AlertyfyService
  ) {}

  ngOnInit() {
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registrationForm = this.fb.group(
      {
        username: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  private passwordMatchingValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatched: true };
  };

  onSubmit() {
    this.isUserSubmitted = true;
    if (this.registrationForm.valid) {
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.isUserSubmitted = false;
      this.alertyfy.success('Congrats, you are successfuly registered');
    } else {
      this.alertyfy.error('Kindly provide the required fields');
    }
  }

  userData(): User {
    return (this.user = {
      username: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registrationForm.get('username') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
