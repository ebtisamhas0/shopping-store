import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  createForm!: FormGroup;
  submitted = false;
  notes : string = '';

  @Output() addCart = new EventEmitter();
 
  constructor(private formB: FormBuilder) {}

 

  
  
  ngOnInit():void{
    this.createForm = this.formB.group({
      firstName: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      creditCard: ['', [Validators.required, Validators.minLength(16)]],
      usernote: new FormControl()
  });
}
 onSubmit():void{
  
  this.addCart.emit(this.createForm.value);


  }
      
      get firstName() {
        return this.createForm.get('firstName');
      }
      get address() {
        return this.createForm.get('address');
      }
      get creditCard() {
        return this.createForm.get('creditCard');
      }
      onChange(note: string){
        note = this.notes;
        console.log("THIS IS NOTE" + note)
        
      }
  }

  

