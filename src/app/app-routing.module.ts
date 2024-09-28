import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
    {
        path: '',
        component: TaskComponent,
        title: 'Gestoring Task',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
