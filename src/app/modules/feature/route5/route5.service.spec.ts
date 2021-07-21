import { TestBed } from '@angular/core/testing';

import { Route5Service } from './route5.service';

describe('Route5Service', () => {
  let service: Route5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Route5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
