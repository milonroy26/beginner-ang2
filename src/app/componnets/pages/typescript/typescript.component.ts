import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {
  //baidefol type any 
  public data = 22;
  public name:string = 'jastion bar';
  public number1 = 28;
  public number2= 12;
  public total:number = 0;
  public students:string[] = ["jeson", "jastin", "timbar", "rahul"];
  // union arry
  public stus:(number|string)[] = ["jamal", 30];
  public users:{name:string, age:number} = {name: "milon", age: 33};
 
  constructor() { }

   // function
   getSum() {
    this.total = this.number1 + this.number2;
  }

  ngOnInit(): void {
  }

}
