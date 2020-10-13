import { TestBed } from '@angular/core/testing';

import { HttpelectromenagerService } from './httpelectromenager.service';

describe('HttpelectromenagerService', () => {
  let service: HttpelectromenagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpelectromenagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
