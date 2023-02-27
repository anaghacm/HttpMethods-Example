import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class ProgressBarInterceptor implements HttpInterceptor {

  constructor(private _loader:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loader.isLoading.next(true)
    return next.handle(request).pipe(
      finalize(() => this._loader.isLoading.next(false))
    );
  }
}
