import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { PacienteService } from "../shared/paciente/paciente.service";


export const pacienteSeleccionadoGuard: CanActivateFn = (route, state) => {
  const pacienteService = inject(PacienteService);
  const router = inject(Router);

  if (!pacienteService.tienePacienteSeleccionado()) {
    router.navigate(['/pacientes']);
    return false;
  }

  return true;
};