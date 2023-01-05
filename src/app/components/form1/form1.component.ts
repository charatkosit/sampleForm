import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from 'src/app/business.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  angForm!: FormGroup;


  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      person_name:['',Validators.required],
      business_name:['',Validators.required],
      business_gst_number:['',Validators.required]
    })
  } 

  ngOnInit(): void {
  }

  addBusiness(person_name: string, busines_name: string, business_gst_number: string) {
    this.bs.addBusiness(person_name, busines_name, business_gst_number);
  }

}
