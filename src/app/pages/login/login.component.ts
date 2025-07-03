import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isUsernameValid: boolean = true;

  onKey(event: KeyboardEvent, field: string): void {
    const value = (event.target as HTMLInputElement).value;
    if (field === 'username') {
      this.isUsernameValid = /^[a-zA-Z0-9]+$/.test(value);
    }
  }

  onSubmit(): void {
    if (!this.isUsernameValid) {
      alert('Invalid username!');
      return;
    }

    alert('Login submitted!');
  }
}
