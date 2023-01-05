import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpasswd',
  templateUrl: './forgotpasswd.component.html',
  styleUrls: ['./forgotpasswd.component.css']
})
export class ForgotpasswdComponent implements OnInit {

  forgotpasswdForm!: FormGroup; 
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotpasswdForm = this.builder.group({
      // EmailAddress: new FormControl('',Validators.compose([Validators.required,Validators.email]))
      EmailAddress: ['',[Validators.required,Validators.email]]
    })
  }

  onSubmit(value:string){
    console.log(value)
//ตรวจสอบว่า  มี  email นี้ใน database หรือไม่


  }

}
