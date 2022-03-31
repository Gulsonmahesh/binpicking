import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrippingpointsdialogComponent } from './grippingpointsdialog.component';

describe('GrippingpointsdialogComponent', () => {
  let component: GrippingpointsdialogComponent;
  let fixture: ComponentFixture<GrippingpointsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrippingpointsdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrippingpointsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
