import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'adsadsnefbqwr23ri13oeklmnf234msna';
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authentication', `Token ${token}`),
      withCredentials: true
    })
    
    return next.handle(modifiedRequest)
  }
}
