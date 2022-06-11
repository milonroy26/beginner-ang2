import { ApiService } from './../../../services/api.service';
import { UserServicesService } from './../../../services/user-services.service'
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.scss']
})
export class RestApiComponent implements OnInit {
  public displayData:any;
  public userName:any;
  public result:any;
  public allStudent:any;
  public userInformation:any;

  constructor( private http: HttpClient, private studentInf: ApiService, private userData: UserServicesService) {
      this.allStudent = this.studentInf.stuData();
      this.userInformation = this.userData.getUsersdata();
  }

  ngOnInit(): void {
  }

  postData(){
    let url = "https://jsonplaceholder.typicode.com/posts";
    this.http.post(url, {
      name : this.userName,
      gmail: 'milon@gmail.com',
    }).toPromise().then((data:any) =>{
      this.result = JSON.stringify(`${data.name} --- ${data.gmail}`);
    })
  }

  studentData(){
    const player = [
      {name: "milon", age: 23, gmail: "milon@gmail.com"},
      {name: "jeson", age: 21, gmail: "jeson@gmail.com"},
    ]
  }



}
