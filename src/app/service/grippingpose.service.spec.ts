import { TestBed } from '@angular/core/testing';

import { GrippingposeService } from './grippingpose.service';

describe('GrippingposeService', () => {
  let service: GrippingposeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrippingposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
