import { TestBed } from '@angular/core/testing';

import { FourthLibService } from './fourth-lib.service';

describe('FourthLibService', () => {
  let service: FourthLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourthLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
