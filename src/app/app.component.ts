import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterOutlet],
})
export class AppComponent {
  title = 'backoffice-app';

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    if (typeof window !== 'undefined') {
      this.router.navigate([route]);
    }
  }
}
