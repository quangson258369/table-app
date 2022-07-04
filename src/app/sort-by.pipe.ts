import { Pipe, PipeTransform } from '@angular/core';
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
@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(array: any, field: any): any[] {
    
    array.sort((a: any, b: string) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
