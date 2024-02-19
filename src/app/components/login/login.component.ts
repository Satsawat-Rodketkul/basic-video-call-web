import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { LoginRequestModel } from '../../services/login/models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Input()
  loginModel: LoginRequestModel = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private service: LoginService
  ) {}

  onClickToRegisterPage(): void {
    this.router.navigate(['register']);
  }

  loginUser() {
    this.service.loginUser(this.loginModel)
    .subscribe({
      next: (resposne) => {
        localStorage.setItem("connectedUser", JSON.stringify(resposne.email)) //Not recommend for production
        this.router.navigate(['create-room']);
      }
    });
  }
}