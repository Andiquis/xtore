import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPublico } from './auth-publico';

describe('AuthPublico', () => {
  let component: AuthPublico;
  let fixture: ComponentFixture<AuthPublico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPublico],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPublico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
