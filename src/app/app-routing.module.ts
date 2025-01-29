import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBoardComponent } from './mainboard/mainboard.component';

const routes: Routes = [
    {
        path: '',
        component: MainBoardComponent,
        title: 'Gestoring Task',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
