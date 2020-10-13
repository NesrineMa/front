import { TestBed } from '@angular/core/testing';

import { HttptextilesService } from './httptextiles.service';

describe('HttptextilesService', () => {
  let service: HttptextilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttptextilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
