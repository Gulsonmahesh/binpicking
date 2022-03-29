import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GripperComponent } from './gripper.component';

describe('GripperComponent', () => {
  let component: GripperComponent;
  let fixture: ComponentFixture<GripperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GripperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GripperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
