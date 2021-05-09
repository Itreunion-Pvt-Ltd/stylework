import { TestBed } from '@angular/core/testing';

import { CorporatemembershipService } from './corporatemembership.service';

describe('CorporatemembershipService', () => {
  let service: CorporatemembershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporatemembershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
