import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY } from '../../../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class HttpProxyInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //ADD HEADERS FOR RAPIDAPI REQUESTS
    let request = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });



    return next.handle(request);
  }
}
