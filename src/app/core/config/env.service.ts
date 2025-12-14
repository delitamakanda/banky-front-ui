import { Injectable, signal } from '@angular/core';

const BASE_API_URL = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  private _apiUrl = signal(BASE_API_URL);

  apiUrl = this._apiUrl.asReadonly();

  setBaseUrl(url: string): void {
    this._apiUrl.set(url);
  }
}

