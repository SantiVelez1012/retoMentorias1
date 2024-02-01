import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap, timeout } from 'rxjs';
import { API_KEY } from '../../../constants/api.constants';
import { Store } from '@ngrx/store';
import { hideLoader, showLoader } from '../../../data/state/actions/config.actions';

@Injectable({
  providedIn: 'root'
})
export class HttpProxyInterceptorService implements HttpInterceptor {

  private requestsQueued!: BehaviorSubject<number>

  constructor(private store: Store) {
    this.requestsQueued = new BehaviorSubject<number>(0);

    this.requestsQueued.subscribe((value) => {
      if (value <= 0) {
        this.store.dispatch(hideLoader());
      }
    });
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //ADD HEADERS FOR RAPIDAPI REQUESTS
    let request = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });

    this.requestsQueued.next(this.requestsQueued.getValue() + 1);

    const responseCallBack = this.interceptResponse.bind(this);

    const interceptionOperator = tap<HttpEvent<any>>({
      next: responseCallBack
    });

    const handleRequest = next.handle(request);

    return handleRequest.pipe(
      tap(() => {
        this.store.dispatch(showLoader());
      }), interceptionOperator,
      timeout(5000),
      catchError((error) => {
        this.store.dispatch(hideLoader());
        return of(error);
      })
    );
  }



  interceptResponse(event: HttpEvent<any>) {
    if (event instanceof HttpResponse) {
      this.requestsQueued.next(this.requestsQueued.getValue() - 1);
    }
  }
}
