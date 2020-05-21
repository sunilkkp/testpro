import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './model/user';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http: HttpClient) { }

  private dataUrl = 'https://reqres.in/api/users';

  getUsers(){
    return this.http.get(this.dataUrl).
    pipe(
       map((data: User[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Something went wrong!' );
       })
    )
  }
  
  createUsers(user: User[]) {
    return this.http.post(this.dataUrl,user).
      pipe(
        map((data: any) => {
          return data;
        }), catchError( error => {
          return throwError( 'Something went wrong!' );
      })
    )
  }

  userGetData(id: number): Observable<any>{
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
    })
    )
  }

  updateUser(user: User): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json' })
    };
    return this.http.put(`${this.dataUrl}/${user.id}`, user, httpOptions).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) { 
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.dataUrl}/${id}`).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
}

