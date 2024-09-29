import { FormArray, FormGroup, ValidatorFn } from "@angular/forms";

//Crear un validador para no repetir los nombre de las personas
export const noRepeatPerson = (formGroup: FormGroup) => {
    const people = formGroup.get('people') as FormArray;
    people.controls.forEach(person => {
        let count = Object.values(person).filter( p => p.get('name').value == person.get('name')?.value);
        if(count.length > 1){
            people?.setErrors({noRepeatPerson: true});
        }
    });
    return null
    }

/*     const descriptionEmpty: ValidatorFn = (formControl: FormGroup) => {
        return formControl.get('description_english').value == '' && formControl.get('description_spanish').value == '' ? { desp_empty: true } : null;
      } */