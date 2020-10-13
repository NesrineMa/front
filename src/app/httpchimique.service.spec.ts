import { TestBed } from '@angular/core/testing';

import { HttpchimiqueService } from './httpchimique.service';

describe('HttpchimiqueService', () => {
  let service: HttpchimiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpchimiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
