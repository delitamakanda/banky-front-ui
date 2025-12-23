import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../../core/api/api.service';
import {AuthStore} from '../../core/auth/auth.store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login.page',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  standalone: true,
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})
export class LoginPage {
  private auth = inject(AuthStore);
  private router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  submit(): void {
    this.loading.set(true);
    this.error.set(null);

    // todo: replace with actual login service
    // Simulate network delay
    setTimeout(() => {
      this.loading.set(false);
      if (this.loginForm.valid) {
        this.router.navigate(['/dashboard']);
        this.auth.login('dummy-token'); // Placeholder for actual login
      }
    }, 1000);
  }

}
