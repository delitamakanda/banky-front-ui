import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EnvService} from '../config/env.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private env = inject(EnvService);

  private url(path: string): string {
    return `${this.env.apiUrl}/${path}`;
  }

  get(path: string): Observable<any> {
    return this.http.get(this.url(path));
  }

  post(path: string, data: any): Observable<any> {
    return this.http.post(this.url(path), data);
  }

  put(path: string, data: any): Observable<any> {
    return this.http.put(this.url(path), data);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(this.url(path));
  }
}
