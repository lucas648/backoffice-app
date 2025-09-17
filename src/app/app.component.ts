import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    console.log(`Navigating to ${route}`);
    this.router.navigate([route]);
  }
}