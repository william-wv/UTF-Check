import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { AppInputComponent } from "../../components/input/input";
import { AppButtonComponent } from "../../components/buttons/button/button";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [
    CommonModule,
    FormsModule,
    AppInputComponent,
    AppButtonComponent,
    RouterOutlet,  
    RouterLink,   
  ],
})
export class Login {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  async login() {
    const isValid = await this.auth.login(this.username, this.password);

    if (isValid) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}
