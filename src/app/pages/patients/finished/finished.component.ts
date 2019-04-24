import { Component, OnInit } from '@angular/core';
import { Finished } from './finished.model';
import { FinishedService } from './finished.service';

@Component({
  selector: 'ngx-finished',
  styles: [],
  template: `
    <ng2-smart-table
      [settings]="settings"
      (createConfirm)="addData($event)"
      (editConfirm)="editData($event)"
      (deleteConfirm)="deleteData($event)"
      [source]="list"
    ></ng2-smart-table>
  `
})
export class FinishedComponent implements OnInit {
  list: Finished[] = [];
  constructor(private service: FinishedService) {}

  ngOnInit() {
    this.service.getPatients().subscribe(actionArray => {
      let patients_data = actionArray.payload.get('data');
      if (patients_data) {
        var filterd_patients_data = patients_data.filter(function(hero) {
          return hero.level == 'c';
        });

        this.list = filterd_patients_data;
      }
    });
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      name: {
        title: 'Name'
      },
      nic: {
        title: 'NIC'
      },
      address: {
        title: 'Address'
      },
      email: {
        title: 'Email'
      },
      haircolor: {
        title: 'Hair Color'
      },
      measurements: {
        title: 'Measurements'
      },
      hairstyle: {
        title: 'Hair Style'
      },
      dob: {
        title: 'DOB'
      },
      gender: {
        title: 'Gender'
      },
      reports: {
        title: 'Reports'
      },
      level: {
        title: 'Level'
      }
    }
  };

  addData(event) {
    this.list.push(event.newData);
    //console.log(this.list);
    this.service.addPatient({ data: this.list }).subscribe(next => {
      event.confirm.reject();
    });
  }

  deleteData(event) {
    if (window.confirm('Are you sure you want to Delete?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  /**
   * This function for store the changes in firebase
   * first remove the previous data from the manu list
   * after add the new changed data into manu array
   * then manu array will store in the fitrebase
   */
  editData(event) {
    if (window.confirm('Are you sure you want to save Changes?')) {
      this.list = this.list.filter(obj => obj.nic !== event.data.nic);
      this.list.push(event.newData);
      this.service.addPatient({ manufact: this.list }).subscribe(next => {
        event.confirm.reject();
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
