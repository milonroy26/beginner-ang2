import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public userId:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("User Id Is:", this.route.snapshot.paramMap.get("id"));
    this.userId = this.route.snapshot.paramMap.get("id");
  }

}
