import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  register() {
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;

    this.authService.register(email, password)
      .then(() => {
        this.router.navigate(['/tabs']);
        this.registerForm.reset();
      })
      .catch((error) => {
        console.error('Registration failed', error);

        // Display an error message to the user using ToastController
        this.presentErrorToast('Registration failed. Please try again.');
      });
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'danger',
      position: 'top',
    });
    toast.present();
  }

}
