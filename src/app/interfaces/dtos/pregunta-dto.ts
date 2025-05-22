import { ValidatorFn } from '@angular/forms';
import { Question } from '../question';
export interface preguntaDto{
    id: number,
    textoPregunta: string,
    tipoRespuesta: string,
    idCategoria: number,
    validators?: ValidatorFn[],
    opciones?: opcion[],
    opcionSeleccionada: string,
    valorAlmacenado: string,
    valor:string
}
export interface opcion{
    id: number,
    texto: string,
    tipoValor: string,
    valor: string,
}