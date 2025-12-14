import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import {AuthStore} from './auth.store';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthStore)
  const token = auth.token();

  if (!token) {
    return next(req);
  }

  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(modifiedReq);
}
