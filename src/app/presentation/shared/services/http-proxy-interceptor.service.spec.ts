import { TestBed } from '@angular/core/testing';

import { HttpProxyInterceptorService } from './http-proxy-interceptor.service';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from '../../../data/state/store.types';

describe('HttpProxyInterceptorService', () => {
  let service: HttpProxyInterceptorService;
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot(reducer),
      ],
    });
    service = TestBed.inject(HttpProxyInterceptorService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
