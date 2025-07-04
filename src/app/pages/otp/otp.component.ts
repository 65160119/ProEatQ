import { Component } from '@angular/core';

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

  onOtpChange(value: string): void {
    this.otpValue = value;
  }

  submitOtp(): void {
    console.log('OTP Submitted:', this.otpValue);
  }
}

