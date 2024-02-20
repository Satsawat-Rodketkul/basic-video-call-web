import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic-video-call-web';

  constructor(
    private router: Router
  ) {
    this.router.navigate(['register']);
  }
}