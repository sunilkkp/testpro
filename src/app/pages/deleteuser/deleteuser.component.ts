import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})
export class DeleteuserComponent implements OnInit {

  constructor(private http: HttpClient, public api: ServicesService, public router: Router) { }

  user: any = {};

  ngOnInit(): void {
  }

  createUser(){
    this.api.createUsers(this.user).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/user-list']);
    });
  }

  goBack(){
    this.router.navigate(['/user-list'])
  }
}
