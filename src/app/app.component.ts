import { Component ,OnInit} from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'table-app';
  constructor(private myService: DataService) { }
  users;
  ngOnInit() {
    this.myService.getData()
      .subscribe(res => this.users = res);
  }
  selectValue:string='';
}
