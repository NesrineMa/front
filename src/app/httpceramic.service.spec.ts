import { TestBed } from '@angular/core/testing';

import { HttpceramicService } from './httpceramic.service';

describe('HttpceramicService', () => {
  let service: HttpceramicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpceramicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
