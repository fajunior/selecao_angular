import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { JwtRequest } from './jwt-request.module';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseUrl = 'http://localhost:8080'
   private tokenKey = 'authToken';


  constructor(private snackBar: MatSnackBar, private http: HttpClient, private router: Router) { }

  signin(jwtRequest: JwtRequest):Observable<String>{
    console.log(jwtRequest)
    return this.http.post<JwtRequest>(`${this.baseUrl}/authenticate`, jwtRequest).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.jwtToken);
        localStorage.setItem("username", jwtRequest.username);
      }),
      catchError(e => this.errorHandler(e))
    )
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['users/signin']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUsername(): string | null {
    return localStorage.getItem("username");
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
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
