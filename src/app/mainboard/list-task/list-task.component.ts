import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListTask } from 'src/app/common/interfaces/listtask.interface';
import { Task } from 'src/app/common/interfaces/task.interface';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
  standalone: true,
  imports: [CommonModule, TaskComponent],
})
export class ListTaskComponent {
  @Input() listTask: ListTask = { id: 0, title: '', tasks: [], dateCreated: new Date(), order: 0 };
  constructor() {}

  createTask() {
    console.log(this.listTask);   
  }
}
