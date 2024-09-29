import { Component } from '@angular/core';
import { StateManagerService } from '../common/services/state-manager.service';
import { CreateTaskComponent } from '../task/create-task/create-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  constructor(protected stateManagerService: StateManagerService, public dialog: MatDialog,) { }

  getTasks() {

  }

  openFormCreateTask() {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
    });

    dialogRef.afterClosed().subscribe({ complete :() => {
      // this.loaderTransmittals();
    }});
  }

}
