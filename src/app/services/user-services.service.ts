import { Injectable } from '@angular/core';
import { UserType } from '../UserType';
import { IUserCreate, IUserLogin } from 'src/app/interface/user.interface';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { server } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private server = server;

  constructor(
    private http: HttpClient
  ) { }

  getUsersdata(){
    const data:UserType[] = [
      {
        name: "jastin",
        email: "jastin@gmail.com",
        age: 30,
        bangladesh: true,
      }
    ]
    return data;
  }

  signUp(user: IUserCreate): Observable<IUserCreate> {
    return this.http.post<IUserCreate>(`${this.server}/auth/create`, user)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  login(user: IUserLogin): Observable<IUserLogin> {
    return this.http.post<IUserLogin>(`${this.server}/auth/login`, user)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  errorHandeller(error: HttpErrorResponse){
    return throwError(error);
  }

}
