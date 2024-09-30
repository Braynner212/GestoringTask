import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

    // URL de la API
    private apiUrl = 'http://localhost:3001/api/task';
  
    // BehaviorSubject para almacenar el estado de los datos
    private tasksSubject = new BehaviorSubject<any[]>([]);
    public tasks$ = this.tasksSubject.asObservable();  // Exponer como observable

    constructor(private http: HttpClient) {}

    // Método para obtener datos de la API y actualizar el estado
    fetchTasks(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl).pipe(
        tap((tasks:any) => this.tasksSubject.next(tasks['tasksDB'])) // Actualizamos el estado cuando recibimos los datos
      );
    }
  
    // Método para agregar un nuevo ítem a la base de datos y al estado
    addTask(task: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, task).pipe(
        tap(newTask => {
          const currentTasks = this.tasksSubject.value;
          this.tasksSubject.next([...currentTasks, newTask]); // Añadir al estado actual
        })
      );
    }
  }
