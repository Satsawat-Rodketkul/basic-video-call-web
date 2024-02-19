import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private http: HttpClient
  ) { }

  logoutUser(email: string) {
    const logoutUrl = `${AppConstants.API_BASE_URL}logout`;
    return this.http.post(logoutUrl, email);
  }
}