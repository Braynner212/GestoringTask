import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validator, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/common/interfaces/task.interface';
import { StoreManagerService } from 'src/app/common/services/store-manager.service';
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
  newTask: Task = { id:0, title: '', date_limit: new Date(), status: 'pending'}; // Nueva tarea


  constructor(private formBuilder: FormBuilder, private storeManagerService: StoreManagerService, public dialogRef: MatDialogRef<CreateTaskComponent>) { }



  ngOnInit():void{
    this.makeForm();
  }


  makeForm(){
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      date_limit: [new Date(), Validators.required],
      people:
        this.formBuilder.array([
          this.makeFormPerson(),
        ])
    }
    , 
    {
      validators: noRepeatPerson
    }
  )
  }

  makeFormPerson(){
    return this.formPerson = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
        }),
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

  addItem() {
    if (this.form.valid) {
      
    }
  }


  sendCreate(){
    if(this.form.invalid){ 
      Object.keys(this.form.controls).forEach(key => {
        if (this.form.controls[key].invalid) {
          this.form.controls[key].markAsTouched();
        }
      });

      Object.values(this.people.controls).forEach(formPerson => {
        let formPersonArray = formPerson as FormArray
        Object.keys(formPersonArray.controls).forEach((key:any) => {
          if(key == 'skills'){
            let formSkillsArray = ((formPersonArray.controls[key] as FormArray).controls[0] as FormArray).get('name');
            if(formSkillsArray?.invalid){
              formSkillsArray?.markAsTouched();
            }
          } else if (formPersonArray.controls[key].invalid) {
            formPersonArray.controls[key].markAsTouched();
          }
        })

      });
    } else {
      /* this.StoreManagerService.addTask(this.form.value).subscribe(() => {
        this.newTask = { id:0, title: '', date_limit: new Date(), status: 'pending'}; // Reiniciamos el nuevo ítem
        this.dialogRef.close();
      }); */
    }
  } 



}
