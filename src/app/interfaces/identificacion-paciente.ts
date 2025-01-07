import { FormGroup, FormControl, Validators } from "@angular/forms";

export interface IDP {
    IDP_NumAt: number; // Número de atención
    IDP_Cedu: number; //cedula paciente
    IDP_Nombr: string; // Nombre del paciente
    IDP_FecNa: Date; // Fecha de nacimiento
    IDP_AnyEs: number; // Años de escolaridad
    IDP_FecEv: Date; // Fecha de evaluación
    IDP_Edad0: number; // Edad
    IDP_Later: string; // Lateralidad
    IDP_OcuPr: string; // Ocupación previa
    IDP_OcuAc: string; // Ocupación actual
    IDP_OcuTi: string; // Ocupación a la que se dedicó durante más tiempo
    IDP_Ciuda: string; // Ciudad
    IDP_LugVi: string; // Lugar de vivienda
    IDP_Asegu: string; // Aseguradora
    IDP_Longi: boolean; // Longitudinal
    IDP_EdaIn: number; // Edad de inicio
    IDP_SinIn: string; // Síntoma de inicio
    IDP_TenAs: number; // TA sistólica
    IDP_TenAd: number; // TA diastólica
    IDP_FreCa: number; // Frecuencia cardíaca
    IDP_FreRe: number; // Frecuencia respiratoria
    IDP_Satur: number; // Saturación
    IDP_Talla: number; // Talla en centímetros
    IDP_peso0: number; // Peso en kilogramos
    IDP_IndMC: number; // Índice de masa corporal (IMC)
}
export class IDPForm {
    static createForm(): FormGroup {
      return new FormGroup({
        IDP_NumAt: new FormControl(null, [Validators.required]),
        IDP_Nombr: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        IDP_FecNa: new FormControl(null, [Validators.required]),
        IDP_AnyEs: new FormControl(null, [Validators.required, Validators.min(0)]),
        IDP_FecEv: new FormControl(null, [Validators.required]),
        IDP_Edad0: new FormControl(null, [Validators.required, Validators.min(0)]),
        IDP_Later: new FormControl('', [Validators.required]),
        IDP_OcuPr: new FormControl('', [Validators.maxLength(100)]),
        IDP_OcuAc: new FormControl('', [Validators.maxLength(100)]),
        IDP_OcuTi: new FormControl('', [Validators.maxLength(100)]),
        IDP_Ciuda: new FormControl('', [Validators.maxLength(50)]),
        IDP_LugVi: new FormControl('', [Validators.maxLength(100)]),
        IDP_Asegu: new FormControl('', [Validators.maxLength(50)]),
        IDP_Longi: new FormControl(false),
        IDP_EdaIn: new FormControl(null, [Validators.min(0)]),
        IDP_SinIn: new FormControl('', [Validators.maxLength(200)]),
        IDP_TenAs: new FormControl(null, [Validators.min(0)]),
        IDP_TenAd: new FormControl(null, [Validators.min(0)]),
        IDP_FreCa: new FormControl(null, [Validators.min(0)]),
        IDP_FreRe: new FormControl(null, [Validators.min(0)]),
        IDP_Satur: new FormControl(null, [Validators.min(0), Validators.max(100)]),
        IDP_Talla: new FormControl(null, [Validators.required, Validators.min(0)]),
        IDP_peso0: new FormControl(null, [Validators.required, Validators.min(0)]),
        IDP_IndMC: new FormControl(null, [Validators.required, Validators.min(0)]),
        IDP_Cedu: new FormControl(null, [Validators.required, Validators.minLength(100), Validators.maxLength(10000000)])
      });
    }
    static getPacienteFromForm(form: FormGroup): IDP {
        return {
          IDP_NumAt: form.get('IDP_NumAt')?.value,
          IDP_Nombr: form.get('IDP_Nombr')?.value,
          IDP_FecNa: form.get('IDP_FecNa')?.value,
          IDP_AnyEs: form.get('IDP_AnyEs')?.value,
          IDP_FecEv: form.get('IDP_FecEv')?.value,
          IDP_Edad0: form.get('IDP_Edad0')?.value,
          IDP_Later: form.get('IDP_Later')?.value,
          IDP_OcuPr: form.get('IDP_OcuPr')?.value,
          IDP_OcuAc: form.get('IDP_OcuAc')?.value,
          IDP_OcuTi: form.get('IDP_OcuTi')?.value,
          IDP_Ciuda: form.get('IDP_Ciuda')?.value,
          IDP_LugVi: form.get('IDP_LugVi')?.value,
          IDP_Asegu: form.get('IDP_Asegu')?.value,
          IDP_Longi: form.get('IDP_Longi')?.value,
          IDP_EdaIn: form.get('IDP_EdaIn')?.value,
          IDP_SinIn: form.get('IDP_SinIn')?.value,
          IDP_TenAs: form.get('IDP_TenAs')?.value,
          IDP_TenAd: form.get('IDP_TenAd')?.value,
          IDP_FreCa: form.get('IDP_FreCa')?.value,
          IDP_FreRe: form.get('IDP_FreRe')?.value,
          IDP_Satur: form.get('IDP_Satur')?.value,
          IDP_Talla: form.get('IDP_Talla')?.value,
          IDP_peso0: form.get('IDP_peso0')?.value,
          IDP_IndMC: form.get('IDP_IndMC')?.value,
          IDP_Cedu: form.get('IDP_Cedu')?.value
        };
    }
}