import { TestBed } from '@angular/core/testing';

import { UpdatesidebarService } from './updatesidebar.service';

describe('UpdatesidebarService', () => {
  let service: UpdatesidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatesidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
