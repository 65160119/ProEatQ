import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      username,
      password
    });
  }
register(data: {
  username: string;
  password: string;
  password_cf: string;
  phone_number: string;
}): Observable<any> {
  return this.http.post(`${this.apiUrl}/register`, data);
}

verifyOtp(data: {
  otp: string;
  otp_ref: string;
  secret: string;
  user_id: number;
}): Observable<any> {
  return this.http.post(`${this.apiUrl}/verify-otp`, data);
}

}
