import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Users} from './users'
import { Repos } from './repos';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:Users;
  repo:Repos[];
  constructor(private http:HttpClient) { 
    this.user = new Users("","","",0 ,0,"",);
    this.repo = [];
  }
  apiUrl="https://api.github.com/users";
  defaultUrl="https://api.github.com/users/Vector254";

  getDefault(){
    interface ApiResponse{
      login: string,
      name:string,
      email:string,
      followers:number,
      public_repos:number,
      avatar_url:string,
      
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(this.defaultUrl).toPromise().then(response=>{
          this.user.login = response.login
          this.user.name = response.name
          this.user.email = response.email
          this.user.followers = response.followers
          this.user.public_repos = response.public_repos
          this.user.avatar_url = response.avatar_url
 
          resolve()
      })
      return promise
  })
}
getRepos(){
  let promise = new Promise((resolve, reject) => {
    let apiURL = `${this.defaultUrl}/repos`;
    this.http.get(apiURL)
        .toPromise()
        .then(
            res => { // Success
              this.repo.map(item => {
                return new Repos(
                    item.name,
                    item.description,
                    item.created_at,
                    item.forks,
                    item.html_url
                );
              });
              // this.results = res.json().results;
              resolve();
            },
            msg => { // Error
              reject(msg);
            }
        );
  });
  return promise;
}


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

