import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async login(email: string, password: string): Promise<any> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string): Promise<any> {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async logout(): Promise<void> {
    return await this.afAuth.signOut();
  }

  async getCurrentUser(): Promise<firebase.default.User | null> {
    return await this.afAuth.currentUser;
  }
}
