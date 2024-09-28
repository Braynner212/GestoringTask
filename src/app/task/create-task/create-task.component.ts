import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule ],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }


  makeForm(){
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      date_limit: ['', Validators.required],
      

    })
  }

  sendCreate(){

  }

}
