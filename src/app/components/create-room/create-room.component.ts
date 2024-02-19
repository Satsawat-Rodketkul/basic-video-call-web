import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../../services/logout/logout.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.scss'
})
export class CreateRoomComponent {

  email: string = JSON.parse(localStorage.getItem('connectedUser')!);

  constructor(
    private rounter: Router,
    private logoutService: LogoutService
  ) {}

  onCreateNewMeet(): void {
    this.rounter.navigate(['zegocloud-meeting']);
  }

  onJoinMeetRoom(): void {

  }

  onLogout(): void {
    this.logoutService.logoutUser(this.email)
    .subscribe({
      next: () => {
        localStorage.removeItem('connectedUser');
        this.rounter.navigate(['login']);
      }
    });
  }
}