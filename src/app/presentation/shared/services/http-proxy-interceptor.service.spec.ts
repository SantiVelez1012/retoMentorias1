import { TestBed } from '@angular/core/testing';

import { HttpProxyInterceptorService } from './http-proxy-interceptor.service';

describe('HttpProxyInterceptorService', () => {
  let service: HttpProxyInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProxyInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
