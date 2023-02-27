import { TestBed } from '@angular/core/testing';

import { StatusDisplayInterceptor } from './status-display.interceptor';

describe('StatusDisplayInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StatusDisplayInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StatusDisplayInterceptor = TestBed.inject(StatusDisplayInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
