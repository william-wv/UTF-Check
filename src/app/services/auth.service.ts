import { Injectable, Inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from "firebase/auth"; 

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(@Inject('FIRE_AUTH') private auth: Auth) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  get currentUser() {
    return this.auth.currentUser;
  }
}
