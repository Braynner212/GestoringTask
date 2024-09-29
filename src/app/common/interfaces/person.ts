import { skill } from "./skill";

export interface Person {
    id: number;
    name: string; //obligatorio, mínimo 5 caracteres, no puede repetirse entre las personas de la misma tarea.
    age: number; //Mayor de 18 años.
    skills: skill[]; //lista de habilidades asociadas a la persona, debe tener al menos una habilidad.
    state: 1|0; //1 = activo, 0 = inactivo.
}
