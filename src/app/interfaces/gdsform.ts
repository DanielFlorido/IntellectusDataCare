import { GDSQuestion } from "./gdsquestion";

export interface GDSForm {
    patientId: string;
    date: Date;
    questions: GDSQuestion[];
    totalScore: number;
}  