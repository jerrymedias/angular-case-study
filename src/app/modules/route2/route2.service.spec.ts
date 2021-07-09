import { TestBed } from '@angular/core/testing';

import { Route2Service } from './route2.service';

describe('Route2Service', () => {
  let service: Route2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Route2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
