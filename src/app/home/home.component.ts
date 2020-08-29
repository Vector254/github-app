import { Component, OnInit } from '@angular/core';
import {Users} from '../users'
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:Users;

  constructor( private http:HttpClient) { }

  ngOnInit(){
    interface ApiResponse{
    login: string,
    email:string,
    followers:number,
    location: string,
    public_repos:number,
    avatar_url:string
    }

    this.http.get<ApiResponse>("https://api.github.com/users/Vector254").subscribe(data=>{
      // Succesful API request
      this.user = new Users(data.login, data.email,data.followers,data.location,data.public_repos,data.avatar_url)
    })
  }

}
