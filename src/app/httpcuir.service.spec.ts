import { TestBed } from '@angular/core/testing';

import { HttpcuirService } from './httpcuir.service';

describe('HttpcuirService', () => {
  let service: HttpcuirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpcuirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
