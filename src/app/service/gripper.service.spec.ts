import { TestBed } from '@angular/core/testing';

import { GripperService } from './gripper.service';

describe('GripperService', () => {
  let service: GripperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GripperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
