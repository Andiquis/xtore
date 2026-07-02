import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdmin } from './auth-admin';

describe('AuthAdmin', () => {
  let component: AuthAdmin;
  let fixture: ComponentFixture<AuthAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
