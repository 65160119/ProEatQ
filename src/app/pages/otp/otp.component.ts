import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-otp',
  standalone: false,
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OTPComponent {
  otpValue: string = '';

  otpConfig = {
    length: 6,
    allowNumbersOnly: true
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onOtpChange(value: string): void {
    this.otpValue = value;
  }

  submitOtp(): void {
    const otp_ref = localStorage.getItem('otp_ref') || '';
    const secret = localStorage.getItem('secret') || '';
    const user_id_str = localStorage.getItem('user_id') || '';

    if (!otp_ref || !secret || !user_id_str) {
      alert('Incorrect OTP please try again');
      return;
    }

    const user_id = Number(user_id_str);
    if (isNaN(user_id)) {
      alert('Invalid user ID');
      return;
    }

    this.authService.verifyOtp({
      otp: this.otpValue,
      otp_ref,
      secret,
      user_id, 
    }).subscribe({
      next: (res) => {
        alert('OTP verified!');
        this.router.navigate(['/success']);
      },
      error: (err) => {
        alert('Invalid OTP');
        console.error(err);
      }
    });
  }
}
