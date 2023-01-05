import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswdComponent } from './components/changepasswd/changepasswd.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ForgotpasswdComponent } from './components/forgotpasswd/forgotpasswd.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';
import { Form4Component } from './components/form4/form4.component';
import { Form5Component } from './components/form5/form5.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },  //ไม่พิมพ์อะไรเลย ให้ไป login


  { path: "form1",   component: Form1Component },
  { path: "form2", component: Form2Component },
  { path: "form3" , component: Form3Component },
  { path: "form4" , component: Form4Component },
  { path: "form5" , component: Form5Component },
  { path: "datatable" , component: DatatableComponent },
  { path: "datepicker" , component: DatepickerComponent },
  { path: "login" , component: LoginComponent },
  { path: "forgotpasswd" , component: ForgotpasswdComponent },
  { path: "register" , component: RegisterComponent },
  { path: "profile" , component: ProfileComponent },
  { path: "changepasswd" , component: ChangepasswdComponent },

  //ดู route เพิ่มใน auth-routing-module
   //ดู route เพิ่มใน admin-routing-module


  { path: "**", redirectTo: "dashboard" }                    // พิมพ์ผิด หรือ พิมพ์มั่ว ให้ไป login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
