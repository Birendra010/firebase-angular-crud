import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private aurh: AuthService) {}

  forgotPassword() {
    this.aurh.forgotPassword(this.email);
    this.email = '';
  }
}
