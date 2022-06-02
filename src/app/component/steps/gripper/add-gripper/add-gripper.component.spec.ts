import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGripperComponent } from './add-gripper.component';

describe('AddGripperComponent', () => {
  let component: AddGripperComponent;
  let fixture: ComponentFixture<AddGripperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGripperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGripperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
