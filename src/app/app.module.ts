import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {UserRequestService} from './user-request.service';

import { AboutComponent } from './about/about.component'
import {TimePipePipe} from './time-pipe.pipe';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TimePipePipe,
    AboutComponent,
    FooterComponent,
 
  
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
