import { TestBed } from '@angular/core/testing';

import { HttpmecaniqueService } from './httpmecanique.service';

describe('HttpmecaniqueService', () => {
  let service: HttpmecaniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpmecaniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
