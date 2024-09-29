import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormArrayName, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { skill } from 'src/app/common/interfaces/skill';
import { Person } from 'src/app/common/interfaces/person';
import { noRepeatPerson } from 'src/app/common/utils/validator-customer';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],

})
export class CreateTaskComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  formPerson: FormGroup = new FormGroup({});
  formSkill: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit():void{
    this.makeForm();
  }


  makeForm(){
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      date_limit: ['', Validators.required],
      people:
        this.formBuilder.array([
          this.makeFormPerson(),
        ])
      ,
    },
    // {validators: noRepeatPerson}
  )
  }

  makeFormPerson(){
    return this.formPerson = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(5)],
      age: ['', Validators.required, Validators.min(18)],
      skills: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
        })
      ])
    })
  }

  makeFormSkill(){
    return this.formSkill = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  get people(){
    return this.form.get('people') as FormArray;
  }

  getSkills(indexFormPerson: number){
    return this.people.get([indexFormPerson,'skills']) as FormArray;
  }

  addFormPerson(){
    this.people.push(
      this.makeFormPerson()
    );
  }

  removeFormPerson(index:number){
    this.people.removeAt(index);
  }


  addFormSkill(indexFormPerson:number){
    let formPersonAux =  this.people.controls[indexFormPerson] as FormArray;
    (formPersonAux.get('skills') as FormArray).push(
      this.makeFormSkill()
    );
  }

  removeFormSkill(indexFormPerson:number, indexFormSkill: number){
    let formPersonAux =  this.people.controls[indexFormPerson] as FormArray;
    (formPersonAux.get('skills') as FormArray).removeAt(indexFormSkill);
  }


  sendCreate(){

  }

}
