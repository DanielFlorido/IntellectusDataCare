import { ValidatorFn } from "@angular/forms";

export interface Question {
    id: string;
    label:string;
    type: 'text' | 'number' | 'radio' | 'select' | 'date' | 'yesNo'| 'selectValue';
    options?: string[];
    optionsValue?: {label:string; value: any}[];
    value?: any;
    validators?: ValidatorFn[];
}