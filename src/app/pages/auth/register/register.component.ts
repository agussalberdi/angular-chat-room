import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MainContainerComponent } from './../../../components/layout/main-container/main-container.component';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, MainContainerComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.createForm();
  }

  private createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    })
  }

  signUp() {
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    this.authService.createUser(email, password);
    this.router.navigate(['/chat-rooms']);
  }
}
