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
      console.log(this.users);
    });
  }

  userDelete(user){
    this.api.deleteUser(user.id)
      .subscribe( data => {
        console.log(data)
        alert('user deleted');
    })
  }
  // userDelete(id: number){
  //   if(confirm('Are You Sure to delete??')){
  //     this.api.deleteUser(id).subscribe(res => {
  //       console.log(res)
  //     })
  //   }
  // }
}
