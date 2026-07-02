import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFranquicia } from './auth-franquicia';

describe('AuthFranquicia', () => {
  let component: AuthFranquicia;
  let fixture: ComponentFixture<AuthFranquicia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFranquicia],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFranquicia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
