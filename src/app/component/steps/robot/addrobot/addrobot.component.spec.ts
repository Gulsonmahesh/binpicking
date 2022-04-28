import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrobotComponent } from './addrobot.component';

describe('AddrobotComponent', () => {
  let component: AddrobotComponent;
  let fixture: ComponentFixture<AddrobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
