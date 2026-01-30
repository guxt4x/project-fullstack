import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimaryInput,
  ],
  providers: [
    Login
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup;

  constructor(
    private router: Router
    private loginService: Login,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => console.log("Sucesso"),
      error: () => console.log("Sucesso")
    })
  }

  navigate() {
    this.router.navigate(["signup"])
  }
}
