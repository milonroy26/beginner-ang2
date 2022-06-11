import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = "https://jsonplaceholder.typicode.com/users";
  public urlPost = "https://jsonplaceholder.typicode.com/posts"
  public name:string = "";

  constructor(private http: HttpClient) { }
  
  userslist(){
    return this.http.get(this.url);
  }

  stuData(){
    return[
      {name: "jeson", age: 30, gmail: "jeson@gmail.coom"},
      {name: "jastin", age: 40, gmail: "jastin@gamil.com"},
      {name: "rahul", age: 30, gmail: "rahul@gamil.com"},
      {name: "salman", age: 35, gmail: "salman@gmail.com"},
    ]
  }

 
  // saveUsers(data:any){
  //   return this.http.post(this.url,data);
  // }
}
