import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  taskList: Task[] = [];
  constructor() { }
  

}
