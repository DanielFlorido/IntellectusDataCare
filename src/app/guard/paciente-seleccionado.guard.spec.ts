import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pacienteSeleccionadoGuard } from './paciente-seleccionado-guard.guard';

describe('pacienteSeleccionadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pacienteSeleccionadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
