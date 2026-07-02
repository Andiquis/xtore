import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelClientes } from './panel-clientes';

describe('PanelClientes', () => {
  let component: PanelClientes;
  let fixture: ComponentFixture<PanelClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
