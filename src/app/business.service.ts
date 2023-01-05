import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }
  
  uri = 'http://localhost:4000/business';

  addBusiness(person_name:string, business_name:string, business_gst_number:string) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    // this.http.post(`${this.uri}/add`, obj)
    //     .subscribe(res => console.log('Done'));
  }
}
