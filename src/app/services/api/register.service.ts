import { Injectable } from '@angular/core';
import { RegisterModel } from './models/register-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/api/v1/users/';

  constructor(
    private http: HttpClient
  ) { }

  createNewUser(registerModel: RegisterModel) {
    const registerUrl = `${this.baseUrl}register`;
    return this.http.post<any>(registerUrl, registerModel);
  }
}