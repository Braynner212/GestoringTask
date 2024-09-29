import { FormGroup } from "@angular/forms";
import { Person } from "./person";

export interface Task {
    id: number;
    title: string;
    date_limit: Date; //Fecha de expiración de la tarea.
    status: 'completed' | 'pending';
}
