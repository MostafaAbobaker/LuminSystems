import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarearMainPageComponent } from './carear-main-page.component';

describe('CarearMainPageComponent', () => {
  let component: CarearMainPageComponent;
  let fixture: ComponentFixture<CarearMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarearMainPageComponent]
    });
    fixture = TestBed.createComponent(CarearMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
