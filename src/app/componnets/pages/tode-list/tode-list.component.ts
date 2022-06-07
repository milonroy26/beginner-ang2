import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tode-list',
  templateUrl: './tode-list.component.html',
  styleUrls: ['./tode-list.component.scss']
})
export class TodeListComponent implements OnInit {
  public lists:any[] = []; 


  constructor() { }

  ngOnInit(): void {
  }

  // method
  addTask(item:any){
    this.lists.push({id: this.lists.length, name: item});
  }

  removeTask(id:number){
    this.lists = this.lists.filter(list => list.id! === id);
    console.log(id);
  }
}
