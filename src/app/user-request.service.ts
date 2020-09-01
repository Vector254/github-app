import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Users} from './users'

import {environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:Users;
  repo:any;
  
  
  private username: string;
  private apiUrl="https://api.github.com/users/";

  constructor(private http:HttpClient) { 
    this.user = new Users("","","",0 ,0,0,"","",new Date);
    this.username = 'Vector254';
    
  }

  
  updateData(username:string){
   
    this.username=username;
  }
  getUser(){
    interface ApiResponse{
      login: string,
      name:string,
      email:string,
      followers:number,
      public_repos:number,
      avatar_url:string,
      created_at:Date
      
      }
      var promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(this.apiUrl+this.username+"?client_id="+environment.apiKey).toPromise().then(response=>{
         
          this.user.login = response.login
          this.user.name = response.name
          this.user.email = response.email
          this.user.followers = response.followers
          this.user.public_repos = response.public_repos
          this.user.avatar_url = response.avatar_url
          this.user.created_at=response.created_at
 
          resolve()
      })
      return promise
  })
}
getRepos(){
  return this.http.get("https://api.github.com/users/" +this.username + "/repos?client_id=" + environment.apiKey)
}


  }




