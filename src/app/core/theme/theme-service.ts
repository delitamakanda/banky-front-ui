import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';
const THEME_MODE_KEY = 'theme-mode';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _mode = signal<ThemeMode>(<"light" | "dark" | "system">localStorage.getItem(THEME_MODE_KEY) || 'system' as ThemeMode);
  mode = this._mode.asReadonly();

  private media = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    this.apply(this._mode());
    this.media.addEventListener('change', () => {
      if (this._mode() === 'system') {
        this.apply('system')
      }
    });
  }

  setMode(mode: ThemeMode): void {
    this._mode.set(mode);
    localStorage.setItem(THEME_MODE_KEY, mode);
    this.apply(mode);
  }

  private apply(mode: ThemeMode) {
    const root = document.documentElement;
    if (mode === 'system') {
      const isDark = this.media.matches ?? true;
      root.setAttribute('data-theme', isDark? 'dark' : 'light');
    }
    root.setAttribute('data-theme', mode);
  }

}
