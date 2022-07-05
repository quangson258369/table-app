import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  
)
export class DataService {

  constructor(private httpService: HttpClient) { }

  getData() {
    return this.httpService.get('../../assets/users.json');
  }
}
