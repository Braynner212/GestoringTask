import { Task } from "./task.interface";

export interface ListTask {
    id: number;
    title: string;
    tasks: Task[];
    dateCreated: Date;
    order: number;
}
