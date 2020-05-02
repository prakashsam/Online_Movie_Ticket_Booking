import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { TheaterComponent } from './theater/theater.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "theater", component:TheaterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
