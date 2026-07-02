import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAdmin } from './landing-admin';

describe('LandingAdmin', () => {
  let component: LandingAdmin;
  let fixture: ComponentFixture<LandingAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
