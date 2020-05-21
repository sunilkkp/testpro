import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { EdtiuserComponent } from './pages/edtiuser/edtiuser.component';
import { DeleteuserComponent } from './pages/deleteuser/deleteuser.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/user-list', 
    pathMatch: 'full' 
  },
  {
    path: 'user-list',
    component: UserlistComponent
  },
  {
    path: 'edit-user/:id',
    component: EdtiuserComponent
  },
  {
    path: 'create-user',
    component: DeleteuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
