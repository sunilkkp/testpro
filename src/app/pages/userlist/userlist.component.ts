import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {User} from "../../model/user"
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  users: User[];


  constructor(public http: HttpClient, public api: ServicesService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    this.api
    .getUsers()
    .subscribe((data:any) => {
      this.users = data.data;
    });
  }

  userDelete(id){
    this.api.deleteUser(id)
      .subscribe( data => {
        this.users = this.users.filter(user => user.id !==  id);
        console.log(id)
        alert('user deleted');
    })
  }
}
