import { Component } from '@angular/core';
import usersJson from 'users.json';

interface USER {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: string;
  salary: number;
  phone: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-app';
  constructor() { }
  users: USER[] = usersJson;
}
