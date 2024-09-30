import { FormArray, FormGroup, ValidatorFn } from "@angular/forms";

//Crear un validador para no repetir los nombre de las personas



const noRepeatPerson = (formGroup: FormGroup) => {
    const people = formGroup.get('people') as FormArray;
    people.controls.forEach(person => {
        let name = person.get('name')?.value;
        let result = people.controls.filter(p => p.get('name')?.value == name);

        if(result.length > 1){
            people?.setErrors({noRepeatPerson: true})
        }
    });
    }

    export {noRepeatPerson}