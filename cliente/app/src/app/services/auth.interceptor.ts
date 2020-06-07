import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

//import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Accept'       : 'application/json',
        'Authorization': 'key ttn-account-v2.887Flf39sj7QaSAteMdXc8t0VSEpfc1A-kSVKcQEiu8',
      },
    });

    return next.handle(req);
  }
}