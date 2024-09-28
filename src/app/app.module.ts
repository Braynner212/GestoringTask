import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CreatePersonComponent } from './task/create-task/form-person/form-person.component';
import { FormSkillComponent } from './task/create-task/form-person/form-skill/form-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CreatePersonComponent,
    FormSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
