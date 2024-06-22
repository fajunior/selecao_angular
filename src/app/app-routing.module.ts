import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { UserCrudComponent } from './views/user-crud/user-crud.component'
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';

import { CarCrudComponent } from './views/car-crud/car-crud.component';
import { CarCreateComponent } from './components/car/car-create/car-create.component';
import { CarDeleteComponent } from './components/car/car-delete/car-delete.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "users",
    component: UserCrudComponent
  },
  {
    path:"users/create",
    component: UserCreateComponent
  },
  {
    path:"users/update/:id",
    component: UserUpdateComponent
  },
  {
    path:"users/delete/:id",
    component: UserDeleteComponent
  },
  {
    path:"cars",
    component: CarCrudComponent
  },
  {
    path:"cars/create",
    component: CarCreateComponent
  },
  {
    path:"cars/delete/:id",
    component: CarDeleteComponent
  },
  {
    path:"cars/update/:id",
    component: CarUpdateComponent
  },
  {
    path:"users/signin",
    component: UserSigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
