import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.scss']
})
export class RestApiComponent implements OnInit {

  // FOR CRATEING ACCOUNT
  public newAccountName: string = '';
  public newAccountEmail: string = '';
  public newAccountPassword: string = '';

  // FOR LOGIN INTO ACCOUNT
  public loginEmail: string = '';
  public loginPassword: string = '';

  constructor(
    private User: UserServicesService,
    private Title: Title
  ) {}
  
  ngOnInit(): void {
    this.Title.setTitle("Todo App");
  }

  register(){
    this.User.signUp({name: this.newAccountName, email: this.newAccountEmail, password: this.newAccountPassword})
    .subscribe(data => {
      console.log("Accoutn Created");
    }, error => {
      console.log(error.error)
    })
  }

  login(){
    this.User.login({email: this.loginEmail, password: this.loginPassword})
    .subscribe(data => {
      console.log(data);
      alert(`${data.name} is logged in`);
    }, error => {
      alert('Login eror');
      console.log(error.error);
    })
  }

}
