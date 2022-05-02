import { TestBed } from '@angular/core/testing';

import { AddgripperService } from './addgripper.service';

describe('AddgripperService', () => {
  let service: AddgripperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddgripperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
