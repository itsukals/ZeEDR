import { TestBed } from '@angular/core/testing';

import { EdrService } from './edr.service';

describe('EdrService', () => {
  let service: EdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
