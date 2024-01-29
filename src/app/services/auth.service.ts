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
   * @returns Promise <firebase.auth.UserCredential>
   */
  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * @desc Method for user login.
   * @returns Promise <firebase.auth.UserCredential>
   */
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * @desc Method for user logout.
   * @returns Promise <void>
   */
  logout() {
    return this.auth.signOut();
  }

  /**
   * @desc Method for deleting a user.
   * @returns Promise <void>
   */
  deleteUser() {
    return this.auth.currentUser?.delete();
  }
}
