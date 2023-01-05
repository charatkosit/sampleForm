import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  confirmPasswordClass: string = 'form-control'
  passwdMinLength:boolean = false;
  passwdClass: string= 'form-control'
  
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private router: Router) { }

  isError = false;


;



  ngOnInit() {

    // แบบใหม่
    this.registerForm = this.fb.group({
      Email: ['',[Validators.required,Validators.email]],
      Password: ['',[Validators.required,Validators.minLength(6)]],
      RePassword:['',[Validators.required,Validators.minLength(6)]]
    })
  }


onSubmit(value:any ) {
  console.log(value)
// ตรวจสอบว่า เคยมี email นี้อยู่หรือไม่ 
// ถ้ามี แจ้ง ว่าเคยมี  
this.router.navigate(["/login"])
}


checkMinLength(pw: string) {
  this.isConfirmPasswordDirty = true;
  if (pw.length  >= 6) {
    this.passwdMinLength = true;
    this.passwdClass = 'form-control is-valid';
  } else {
    this.passwdMinLength = false;
    this.passwdClass = 'form-control is-invalid'
  }
}


checkPasswords(pw: string, cpw: string) {
  this.isConfirmPasswordDirty = true;
  if (pw === cpw) {
    this.passwordsMatching = true;
    this.confirmPasswordClass = 'form-control is-valid';
  } else {
    this.passwordsMatching = false;
    this.confirmPasswordClass = 'form-control is-invalid'
  }
}



  onClickCancel() {
    this.location.back();
  }

}
