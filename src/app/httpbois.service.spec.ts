import { TestBed } from '@angular/core/testing';

import { HttpboisService } from './httpbois.service';

describe('HttpboisService', () => {
  let service: HttpboisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpboisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
