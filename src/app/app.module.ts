import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTaskComponent } from './mainboard/create-task/create-task.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatNotificationComponent } from './mainboard/chat-notification/chat-notification.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatNotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CreateTaskComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
