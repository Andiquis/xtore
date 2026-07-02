import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFranquicia } from './landing-franquicia';

describe('LandingFranquicia', () => {
  let component: LandingFranquicia;
  let fixture: ComponentFixture<LandingFranquicia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFranquicia],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingFranquicia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
