import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.scss']
})
export class LooginComponent implements OnInit {

  reactiveForm = new FormGroup ({
    user: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("") ,
  })

  constructor() { }

  ngOnInit(): void {
  }

  userLogin(item:any){
    console.log(item);
  }

  loginData(){
    console.log(this.reactiveForm.value);
  }

}
