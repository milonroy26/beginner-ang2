import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../../services/api.service'

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.scss']
})
export class RestApiComponent implements OnInit {
  public displayData:any;

  constructor(private userItem: ApiService) { 
    userItem.userslist().subscribe((data => this.displayData = data));
  }

  getUserFormData(data:any){
    this.userItem.saveUsers(data).subscribe((result =>{
      console.log(result);
    }))
  }

  ngOnInit(): void {
  }

}
