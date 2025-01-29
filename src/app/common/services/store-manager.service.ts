import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListTask } from '../interfaces/listtask.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreManagerService {
    //BehavoirSubject for store listTasks
    private ListTasksSubject = new BehaviorSubject<ListTask[]>([{ id: 0, title: 'ToDoList', tasks: [{id: 0, title: 'Task 1', date_limit: new Date("27/01/2025"), status: 'pending'},{id: 1, title: 'Task 2', date_limit: new Date("26/01/2025"), status: 'pending'}], dateCreated: new Date(), order: 0 }]);
    // Create a observable for listTasks
    public listTasks$ = this.ListTasksSubject.asObservable();

    constructor() {}

    addListTask(listTask: ListTask){
        const currentListTasks = this.ListTasksSubject.value;
        this.ListTasksSubject.next([...currentListTasks, listTask])
    }

    // Método para obtener datos de la API y actualizar el estado
    /* fetchTasks(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl).pipe(
        tap((tasks:any) => this.tasksSubject.next(tasks['tasksDB'])) // Actualizamos el estado cuando recibimos los datos
      );
    } */
  
    // Método para agregar un nuevo ítem a la base de datos y al estado
    /* addTask(task: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, task).pipe(
        tap(newTask => {
          const currentTasks = this.tasksSubject.value;
          this.tasksSubject.next([...currentTasks, newTask]); // Añadir al estado actual
        })
      );
    } */
  
    // Método para actualizar un ítem en la base de datos y en el estado
    /* updateTask(id: number, newtask: Task): Observable<any> {
      return this.http.put<any>(this.apiUrl,newtask).pipe(
        tap(() => {
          const currentTasks = this.tasksSubject.value;
          const updatedTasks = currentTasks.map(task =>
            task.id === id ? newtask : task
          );
          this.tasksSubject.next(updatedTasks); // Actualizamos el estado con la tarea modificada
        })
      );
    } */

}