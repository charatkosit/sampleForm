import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';
import { Form4Component } from './components/form4/form4.component';
import { Form5Component } from './components/form5/form5.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswdComponent } from './components/forgotpasswd/forgotpasswd.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangepasswdComponent } from './components/changepasswd/changepasswd.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    DatatableComponent,
    DatepickerComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswdComponent,
    ProfileComponent,
    ChangepasswdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
