import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      Email: ['',[Validators.email]],
      FullName: ['',[Validators.required]],
      Company: ['',[Validators.required]],
      Image: ['profile.png',[Validators.required]],
    })
  }

  onSubmit(value:any){
   console.log(value) 
  }
}
