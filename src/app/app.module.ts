import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {UserRequestService} from './user-request.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [UserRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
