import { TestBed } from '@angular/core/testing';

import { ProjectsummaryService } from './projectsummary.service';

describe('ProjectsummaryService', () => {
  let service: ProjectsummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
