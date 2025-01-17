import { ValidatorFn } from "@angular/forms";

export interface Question {
    id: string;
    label:string;
    type: 'text' | 'number' | 'radio' | 'select' | 'number'| 'date' | 'yesNo';
    options?: string[];
    value?: any;
    validators?: ValidatorFn[];
}