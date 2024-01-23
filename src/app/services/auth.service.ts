import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { Auth, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth = getAuth();
  constructor() {}

  get user() {
    return this.auth.currentUser;
  }

  /**
   * @desc Method for creating a new user.
   */
  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * @desc Method for user login.
   */
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * @desc Method for user logout.
   */
  logout() {
    return this.auth.signOut();
  }
}
