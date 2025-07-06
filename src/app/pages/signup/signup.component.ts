import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone:false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    const { username, phone, password, password_cf } = this.signupForm.value;

    this.authService.register({
      username,
      password,
      password_cf,
      phone_number: phone
    }).subscribe({
      next: (res) => {
        localStorage.setItem('otp_ref', res.otp_ref);
        localStorage.setItem('secret', res.secret);
        localStorage.setItem('user_id', res.user_id);

        this.router.navigate(['/otp']);
      },
      error: (err) => {
        alert('Signup failed');
        console.error(err);
      }
    });
  }
}
