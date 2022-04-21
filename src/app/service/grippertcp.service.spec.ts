import { TestBed } from '@angular/core/testing';

import { GrippertcpService } from './grippertcp.service';

describe('GrippertcpService', () => {
  let service: GrippertcpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrippertcpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
