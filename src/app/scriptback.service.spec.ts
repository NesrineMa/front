import { TestBed } from '@angular/core/testing';

import { ScriptbackService } from './scriptback.service';

describe('ScriptbackService', () => {
  let service: ScriptbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
