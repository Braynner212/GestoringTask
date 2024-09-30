import { Component, NgModule, OnInit } from '@angular/core';
import { StateManagerService } from '../common/services/state-manager.service';
import { CreateTaskComponent } from '../task/create-task/create-task.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Task } from '../common/interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  tasks$: Observable<any[]> = new Observable(); // Observable de las tareas
  constructor(protected stateManagerService: StateManagerService, public dialog: MatDialog,) { }

  ngOnInit():void {
    // Nos suscribimos a las tareas del servicio
    this.tasks$ = this.stateManagerService.tasks$;

    this.loaderTasks();
  }

  filterTasks(){
    this.tasks$ = this.stateManagerService.tasks$
  }

  loaderTasks() {
    // Inicializamos las tareas obteniendo los datos de la API
    this.stateManagerService.fetchTasks().subscribe({
      next: (tasks) => {
        console.log(tasks)
      }
    });
  }

  openFormCreateTask() {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
    });

    dialogRef.afterClosed().subscribe({ complete :() => {
      this.loaderTasks();
    }});
  }

  changeStatus(task:Task){
    task.status = task.status == 'pending' ? 'completed' : 'pending';
    this.stateManagerService.updateTask(task.id, task).subscribe();
  }

}
