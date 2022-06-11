import { Injectable } from '@angular/core';
import { UserType } from '../UserType'

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor() { }

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
}
