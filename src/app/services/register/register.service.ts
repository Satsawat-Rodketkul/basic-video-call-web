import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from './models/register-model';
import { AppConstants } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  createNewUser(registerModel: RegisterModel) {
    const registerUrl = `${AppConstants.API_BASE_URL}register`;
    return this.http.post<any>(registerUrl, registerModel);
  }
}