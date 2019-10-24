import {EventEmitter, Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn:boolean=false;
  emmitter=new EventEmitter<object>();

  emitValue(value:object){
    this.emmitter.emit(value);
  }

  form: FormGroup=new FormGroup({
    mail: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required] )
  })

  constructor() { }

  loginIn(): boolean{
    this.isLoggedIn=true;

    return true;
  }


  initializeForm(){
    this.form.reset();
  }
}