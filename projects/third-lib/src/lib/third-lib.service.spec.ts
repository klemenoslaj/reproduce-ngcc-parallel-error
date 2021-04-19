import { TestBed } from '@angular/core/testing';

import { ThirdLibService } from './third-lib.service';

describe('ThirdLibService', () => {
  let service: ThirdLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
