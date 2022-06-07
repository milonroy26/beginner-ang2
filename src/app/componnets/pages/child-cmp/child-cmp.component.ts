import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-cmp',
  templateUrl: './child-cmp.component.html',
  styleUrls: ['./child-cmp.component.scss']
})
export class ChildCmpComponent implements OnInit {

  constructor() { }
  @ Input() item:{name:string, gmail:string} = {name:'', gmail: ''};
  // @ Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

}
