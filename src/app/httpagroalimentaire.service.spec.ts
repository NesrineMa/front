import { TestBed } from '@angular/core/testing';

import { HttpagroalimentaireService } from './httpagroalimentaire.service';

describe('HttpagroalimentaireService', () => {
  let service: HttpagroalimentaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpagroalimentaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
