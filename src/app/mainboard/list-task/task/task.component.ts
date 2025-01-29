import { Component, Input } from '@angular/core';
import { Task } from 'src/app/common/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  standalone: true
})
export class TaskComponent {
    @Input() task: Task = {id: 0, title: '', date_limit: new Date(), status: 'pending'};
}
