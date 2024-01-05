import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    // Call your authentication service to perform the logout
    this.authService.logout();

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
