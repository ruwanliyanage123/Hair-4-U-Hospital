import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  },
  {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  },
   {
    'id': 60,
    'firstName': 'Lou',
    'lastName': 'Conner',
    'username': '@Sanchez',
    'email': 'lousanchez@comtours.com',
    'age': 16,
  }];

  getData() {
    return this.data;
  }
}
