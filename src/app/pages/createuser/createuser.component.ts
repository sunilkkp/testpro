import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
// import { User } from '../../model/user';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  constructor( public api: ServicesService, public router: Router) { }

  user: any = {};

  ngOnInit(): void {
  }

  createUser(){
    this.api.createUsers(this.user).subscribe((res)=>{
      console.log(this.user)
      this.router.navigate(['/user-list']);
    });
  }

  goBack(){
    this.router.navigate(['/user-list'])
  }
}
