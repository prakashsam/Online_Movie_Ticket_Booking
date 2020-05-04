import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { FormBuilder } from '@angular/forms';
import { TheaterComponent } from './theater/theater.component';
import { TheaterLoginComponent } from './theater/components/theater-login/theater-login.component';
import { TheaterRegisterComponent } from './theater/components/theater-register/theater-register.component';
import { TheaterUpdateComponent } from './theater/components/theater-update/theater-update.component';
import { TheaterDeleteComponent } from './theater/components/theater-delete/theater-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TheaterComponent,
    TheaterLoginComponent,
    TheaterRegisterComponent,
    TheaterUpdateComponent,
    TheaterDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    NgbModule
  ],
  entryComponents: [
  ],
  providers: [
    {provide: FormBuilder}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
