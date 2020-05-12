import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { TheaterComponent } from './theater/theater.component';
import { TheaterUpdateComponent } from './theater/components/theater-update/theater-update.component';
import { TheaterDeleteComponent } from './theater/components/theater-delete/theater-delete.component';
import { TheaterCreateComponent } from './theater/components/theater-create/theater-create.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "theater", component: TheaterComponent,
    children: [
      { path: "create", component: TheaterCreateComponent },
      { path: "update", component: TheaterUpdateComponent },
      { path: "delete", component: TheaterDeleteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
