import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { EdtiuserComponent } from './pages/edtiuser/edtiuser.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    EdtiuserComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
