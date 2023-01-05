import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  private headers = new HttpHeaders({'Content-Type': 'application/json'});  
  private loginUrl:string = 'localhost:3000/api/v1/login';

  constructor(private router: Router, private http: HttpClient) { }

  // login(usernamePassword:string){
  //   return this.http.post<any>(this.loginUrl, usernamePassword, {headers: this.headers})
  // }
}
