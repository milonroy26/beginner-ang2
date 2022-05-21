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
  constructor() { }

  ngOnInit(): void {
  }

}
