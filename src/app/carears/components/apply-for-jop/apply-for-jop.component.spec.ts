import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForJopComponent } from './apply-for-jop.component';

describe('ApplyForJopComponent', () => {
  let component: ApplyForJopComponent;
  let fixture: ComponentFixture<ApplyForJopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyForJopComponent]
    });
    fixture = TestBed.createComponent(ApplyForJopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
