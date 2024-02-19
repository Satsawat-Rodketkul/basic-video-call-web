import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../../services/register/models/register-model';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  @Input()
  registerModel: RegisterModel = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private service: RegisterService
  ) {}

  onClickToLoingPage(): void {
    this.router.navigate(['login']);
  }

  createNewUser() {
    this.service.createNewUser(this.registerModel)
    .subscribe({
      next: () => {
        this.router.navigate(['login']);
      }
    });
  }
}