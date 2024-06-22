import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { JwtRequest } from './jwt-request.module';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseUrl = 'http://localhost:8080'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  signin(jwtRequest: JwtRequest):Observable<String>{
    console.log(jwtRequest)
    return this.http.post<JwtRequest>(`${this.baseUrl}/authenticate`, jwtRequest).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(`Ocorreu um erro (${e.error.message})!`, true)
    return EMPTY
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
}
