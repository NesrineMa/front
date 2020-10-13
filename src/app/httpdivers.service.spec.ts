import { TestBed } from '@angular/core/testing';

import { HttpdiversService } from './httpdivers.service';

describe('HttpdiversService', () => {
  let service: HttpdiversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpdiversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
