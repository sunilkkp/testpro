import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../../services.service'
import { User } from '../../model/user';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edtiuser',
  templateUrl: './edtiuser.component.html',
  styleUrls: ['./edtiuser.component.scss']
})
export class EdtiuserComponent implements OnInit {
  user: User[];

  constructor(
    private api: ServicesService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public location: Location,
  ) { }


  ngOnInit(): void {
   this.getUserData();
  }

 data: any = {}; 
  getUserData(): void{
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`this.activatedRoute.snapshot.paramMap = ${JSON.stringify(this.activatedRoute.snapshot.paramMap)}`);
    this.api.userGetData(id).subscribe(data => {
    console.log(data.data)
    });
  }

  formSubmit(): void{
    this.api.updateUser(this.data).subscribe(() => this.goBack());
  }
  goBack(): void{
   this.router.navigate(['/user-list'])
  }

}
