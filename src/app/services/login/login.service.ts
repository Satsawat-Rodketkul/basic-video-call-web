import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../../constants/constants';
import { LoginRequestModel, LoginResposneModel } from './models/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(loginModel: LoginRequestModel) {
    const loginUrl = `${AppConstants.API_BASE_URL}login`;
    return this.http.post<LoginResposneModel>(loginUrl, loginModel);
  }

}