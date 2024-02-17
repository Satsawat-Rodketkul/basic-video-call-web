import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './models/login-model';
import { AppConstants } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(loginModel: LoginModel) {
    const registerUrl = `${AppConstants.API_BASE_URL}login`;
    return this.http.post<any>(registerUrl, loginModel);
  }

}