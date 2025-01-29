import { Component, NgModule, OnInit } from '@angular/core';
import { StoreManagerService } from '../common/services/store-manager.service';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { Task } from '../common/interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListTaskComponent } from "./list-task/list-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ListTaskComponent],
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainBoardComponent implements OnInit{

  listTasks$: Observable<any[]> = new Observable(); // Observable de las tareas
  filter: string = 'todas';
  constructor(protected StoreManagerService: StoreManagerService, public dialog: MatDialog,) { }

  ngOnInit():void {
    // Nos suscribimos a las tareas del servicio
    this.listTasks$ = this.StoreManagerService.listTasks$;

    this.loaderTasks();
  }

  filterTasks(){
    /* this.tasks$ = this.StoreManagerService.tasks$
    if(this.filter == 'pendientes'){
      this.tasks$ = this.StoreManagerService.tasks$.pipe(
        map((tasks) => tasks.filter((task) => task.status === 'pending'))
      );
    }else if(this.filter == 'completadas'){
      this.tasks$ = this.StoreManagerService.tasks$.pipe(
        map((tasks) => tasks.filter((task) => task.status === 'completed'))
      );
    } else {
      this.tasks$ = this.StoreManagerService.tasks$;
    } */
  }

  loaderTasks() {
    // Inicializamos las tareas obteniendo los datos de la API
    // this.StoreManagerService.fetchTasks().subscribe();
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
    // this.StoreManagerService.updateTask(task.id, task).subscribe();
  }

}
