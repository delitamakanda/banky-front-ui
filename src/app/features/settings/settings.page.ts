import { Component, computed, signal, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EnvService} from '../../core/config/env.service';
import {AuthStore} from '../../core/auth/auth.store';
import {Router} from '@angular/router';
import {ThemeService, ThemeMode} from '../../core/theme/theme-service';
import {ThemePreviewCard} from '../../shared/ui/theme-preview-card/theme-preview-card';

@Component({
  selector: 'app-settings.page',
  imports: [
    ReactiveFormsModule,
    ThemePreviewCard,
  ],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.css',
  standalone: true,
})
export class SettingsPage {
  private auth = inject(AuthStore);
  private env = inject(EnvService);
  private router = inject(Router);
  private theme = inject(ThemeService);
  themeMode = this.theme.mode;

  urlForm = new FormGroup({
    url: new FormControl('', [Validators.required, Validators.pattern('https?://.*')])
  })

  currentUrl = computed(() => this.env.apiUrl());
  draftUrl = this.env.apiUrl();
  error = signal<string | null>(null);

  back(): void {
    this.router.navigate(['/dashboard']);
  }

  save(): void {
    this.error.set(null);
  }

  reset(): void {
    this.error.set(null);
    this.draftUrl = this.currentUrl();
    this.env.setBaseUrl(this.draftUrl);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  setTheme(mode: ThemeMode): void {
    this.theme.setMode(mode);
  }

}
