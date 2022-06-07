import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // interpolation
  public topic = 'Interpolation';
  // property binding
  public isDesabled = true;
  // class binding
  public myClass = 'text-success';
  // multiple class add
  public hasError = true;
  public danger = 'text-danger';
  public classes = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
  }
  // style binding
  public myStyle = 'navy';
  public multiStyle = {
    color: 'red',
    fontSize: '25px',
    fontStyle: 'italic'
  }
  // stylebinding end
  public displayData = '';
  // *ngiF
  public displayName = true;
  // ng switch
  public color = 'red';
  // *ngFor
  public students = ["Jeson", "Jastin", "Timbar", "Neimar", "Mesi"];
  public userDetails =[
    {name: "Rahul", gmail: "rahul@gmail.com", id: 101},
    {name: "krisno", gmail: "krisno@gmail.com", id: 102},
    {name: "Ram", gmail: "ram@gmail.com", id: 103},
    {name: "Gopal", gmail: "gopal@gmail.com", id: 103},
  ];
  public stuDetails = [
    {name: 'jeson', id: 33, favorites: ['fotball', "badminton", "Music"] },
    {name: 'jastin', id: 34, favorites: ['Move', "fotball", "Tiktok"] },
    {name: 'neimar', id: 35, favorites: ['story book', "badminton", "Music"] }
  ]
  // tow way Data binding
  public userName = '';
  public email = '';
  public password = '';
  // addvance pipes
  public pipesTitle = "This is a Addvance Pipes";
  public person = {
    name: "jeson", age: 20, favorite: "creket",
  }
  public today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

  getData(data:any){
    console.log(data)
  }
  getInput(data:any){
    this.displayData = data;
  }
  toggle(){
    this.displayName = !this.displayName;
  }

  // binding method
  proces(){
    const jeson = {
      result: this.email,
    }
    console.log(jeson)
  }
  // reference variable
  referenceV(data:any){
    this.password = data;
  }

}
