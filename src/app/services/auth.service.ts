import { Injectable, Inject } from '@angular/core';
import * as auth_1 from "firebase/auth"; 

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(@Inject('FIRE_AUTH') private auth: auth_1.Auth) {}

  login(email: string, password: string) {
    return auth_1.signInWithEmailAndPassword(this.auth, email, password);
  }

  get currentUser() {
    return this.auth.currentUser;
  }
}
