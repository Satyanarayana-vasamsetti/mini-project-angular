import { TestBed } from '@angular/core/testing';

import { StrechingService } from './streching.service';

describe('StrechingService', () => {
  let service: StrechingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrechingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
