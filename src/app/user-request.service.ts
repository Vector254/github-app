import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Users} from './users'
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:Users;
  constructor(private http:HttpClient) { 
    this.user = new Users("","","" ,"","","",);
  }
  apiUrl="https://api.github.com/users/Vector254";
  userRequest(){
    interface ApiResponse{
      login: string,
      email:string,
      followers:number,
      public_repos:number,
      avatar_url:string,
      
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(this.apiUrl).toPromise().then(response=>{
          this.user.login = response.login
          this.user.email = response.email
          this.user.followers = response.followers
          this.user.public_repos = response.public_repos
          this.user.avatar_url = response.avatar_url
 
          resolve()
      })
      return promise
    })
  }
}

