import { ValidatorFn } from '@angular/forms';
import { Question } from '../question';
export interface preguntaDto{
    idPregunta: number,
    textoPregunta: string,
    tipoRespuesta: string,
    idCategoria: number,
    validators?: ValidatorFn[],
    opciones?: opcion[],
}
export interface opcion{
    id: number,
    texto: string,
    tipoValor: string,
    valor: string,
}