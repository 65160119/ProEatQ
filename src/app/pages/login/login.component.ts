import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '/EatQ/EatQApp/src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('usernameInput') usernameRef!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordRef!: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    const username = this.usernameRef.nativeElement.value.trim();
    const password = this.passwordRef.nativeElement.value;

    if (!username || !password) {
      alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }

    this.authService.login(username, password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบชื่อผู้ใช้หรือรหัสผ่าน');
      }
    });
  }
}
