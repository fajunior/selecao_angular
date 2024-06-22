import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'
import { HomeComponent } from './views/home/home.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { MY_DATE_FORMATS } from './my-date-formats';;

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { FormsModule } from "@angular/forms";
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserCarListComponent } from './components/user/user-car-list/user-car-list.component';
import { CarFieldsComponent } from './components/car/car-fields/car-fields.component';
import { UserCarAddComponent } from './views/user-car-add/user-car-add.component';
import { CarCrudComponent } from './views/car-crud/car-crud.component';
import { CarReadComponent } from './components/car/car-read/car-read.component';
import { CarTableComponent } from './components/car/car-table/car-table.component';
import { CarCreateComponent } from './components/car/car-create/car-create.component';
import { CarDeleteComponent } from './components/car/car-delete/car-delete.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { HttpInterceptorService } from './components/http-interceptor.service';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UserCrudComponent,
    UserCreateComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserCarListComponent,
    UserCarAddComponent,
    UserCarAddComponent,
    UserSigninComponent,
    CarFieldsComponent,
    CarCrudComponent,
    CarReadComponent,
    CarTableComponent,
    CarCreateComponent,
    CarDeleteComponent,
    CarUpdateComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
