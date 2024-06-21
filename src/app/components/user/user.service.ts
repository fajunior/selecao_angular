import { User } from './user.module';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/api/users' 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(user: User):Observable<User>{
    let headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    let params = new HttpParams();

    for (const key in user) {
      if (user.hasOwnProperty(key)) {
        params = params.append(key, user[key]);
      }
    }


    return this.http.post<User>(this.baseUrl, user, options).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`
    return this.http.put<User>(url, user).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<User>(url).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(`Ocorreu um erro (${e.error.message})!`, true)
    return EMPTY
  }
}
