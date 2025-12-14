import {computed, Injectable, signal} from '@angular/core';

const TOKEN_KEY = 'banky-token';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  private _token = signal<string | null>(localStorage.getItem(TOKEN_KEY));

  token = computed(() => this._token());
  isAuthenticated = computed(() => this.token() !== null);

  login(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
    this._token.set(token);
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    this._token.set(null);
  }
}
