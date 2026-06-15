import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapComponent } from './leap.component';

describe('LeapComponent', () => {
  let component: LeapComponent;
  let fixture: ComponentFixture<LeapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeapComponent]
    });
    fixture = TestBed.createComponent(LeapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
