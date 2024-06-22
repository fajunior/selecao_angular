import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = 'http://localhost:8080/api/cars' 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(car: Car):Observable<Car>{
    let headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    let params = new HttpParams();


    return this.http.post<Car>(this.baseUrl, car, options).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Car[]> {
    
    return this.http.get<Car[]>(this.baseUrl).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Car> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Car>(url).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(car: Car): Observable<Car> {
    const url = `${this.baseUrl}/${car.id}`
    console.log(car)
    return this.http.put<Car>(url, car).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Car> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Car>(url).pipe(
      map(obj=>obj),
      catchError(e => this.errorHandler(e))
    )
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(`Ocorreu um erro (${e.error.message})!`, true)
    return EMPTY
  }
}
