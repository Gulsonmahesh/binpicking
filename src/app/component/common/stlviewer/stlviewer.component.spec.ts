import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StlviewerComponent } from './stlviewer.component';

describe('StlviewerComponent', () => {
  let component: StlviewerComponent;
  let fixture: ComponentFixture<StlviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StlviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StlviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
