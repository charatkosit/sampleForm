import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { RestService } from 'src/app/services/rest.service';



 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private rest: RestService
    ) { }





  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
    });
  }


  
  onSubmit(value:any ) {
    console.log(value)
    // this.rest.login(value).subscribe((result)=>console.log(result))
  // ตรวจสอบว่า เคยมี email นี้อยู่หรือไม่ 
  // // ถ้ามี แจ้ง ว่าเคยมี  
  // localStorage.setItem(environment.loginResult, "ok")
  // this.router.navigate(["/shoplist"])
  }


}
