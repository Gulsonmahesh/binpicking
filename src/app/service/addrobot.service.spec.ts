import { TestBed } from '@angular/core/testing';

import { AddrobotService } from './addrobot.service';

describe('AddrobotService', () => {
  let service: AddrobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddrobotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
