import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsummaryComponent } from './projectsummary.component';

describe('ProjectsummaryComponent', () => {
  let component: ProjectsummaryComponent;
  let fixture: ComponentFixture<ProjectsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
