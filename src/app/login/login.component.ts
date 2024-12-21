import { Component } from '@angular/core';
import { StrechingService } from '../services/streching.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  isLoggedIn = false; 
  constructor(private service: StrechingService, private router: Router) {}

  onLogin() {
    this.service.loginUser(this.email, this.password).subscribe({
      next: (response) => {
        // Example: Adjust based on actual response format
        if (response.length > 0) {
          this.isLoggedIn = true;
          alert('Login Successful');
          this.router.navigate(['/home']); // Redirect to dashboard
        } else {
          alert('Invalid credentials. Please try again.');
        }
      },
      error: (err) => {
        alert('Login failed. Please try again.');
        console.error(err);
      },
    });
  }
  onLogout() {
    this.isLoggedIn = false; // Reset login status to false
    this.email = '';
    this.password = '';
    alert('You have been logged out.');
    this.router.navigate(['/login']); // Redirect to login page
  }
  
}
