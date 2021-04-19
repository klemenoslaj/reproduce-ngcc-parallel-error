import { TestBed } from '@angular/core/testing';

import { FifthLibService } from './fifth-lib.service';

describe('FifthLibService', () => {
  let service: FifthLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifthLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
