import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Users} from './users'
import { Repos } from './repos';



@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:Users;
  repo:Repos;
  results:any;
  private userName: string;
  private apiUrl="https://api.github.com/users/";
  private apiKey="da7f8ded4151528f421722dcb2581652b1d914a3";

  constructor(private http:HttpClient) { 
    this.user = new Users("","","",0 ,0,0,"","");
    this.repo = new Repos("","",new Date,0 ,"",);
    this.userName = 'Vector254';
    
  }

  
  updateData(username:string){
   
    this.userName=username;
  }
  getUser(){
    interface ApiResponse{
      login: string,
      name:string,
      email:string,
      followers:number,
      public_repos:number,
      avatar_url:string,
      
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(this.apiUrl+this.userName+"?client_id="+this.apiKey).toPromise().then(response=>{
         
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


repoRequest(){
  interface ApiResponse{
    name: string,
    description:string,
    created_at:any,
    forks:number,
    html_url:string,
    
    
    }
    
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.apiUrl+this.userName+"/repos?client_id="+this.apiKey).toPromise().then(response=>{
       
        this.repo.name = response.name,
        this.repo.description = response.description,
        this.repo.created_at = response.created_at,
        this.repo.forks = response.forks,
        this.repo.html_url = response.html_url
        
        resolve()
    })
    return promise
    
  })
}


  }


