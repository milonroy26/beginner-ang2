import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data = 10;
  public userData = [
    {name: "Jsatin bar", gmail: "jastin@gmail.com"},
    {name: "Jeson", gmail: "jeson@gmail.com"},
    {name: "Rahul", gmail: "rahul@gmail.com"},
    {name: "Timbar", gmail: "jastin@gmail.com"},
    {name: "jery", gmail: "jery@gmail.com"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  // updateData(item:any){
  //   console.log(item);
  // }

}
