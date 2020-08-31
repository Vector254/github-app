import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Users} from './users'
import { Repos } from './repos';
import {environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:Users;
  repo:Repos;
  
  
  private userName: string;
  private apiUrl="https://api.github.com/users/";

  constructor(private http:HttpClient) { 
    this.user = new Users("","","",0 ,0,0,"","",new Date);
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
      created_at:Date
      
      }
      var promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(this.apiUrl+this.userName+"?client_id="+environment.apiKey).toPromise().then(response=>{
         
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


repoRequest(){
  interface ApiResponse{
    name: string,
    description:string,
    created_at:any,
    forks:number,
    html_url:string,
    
    
    }
    
    var promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.apiUrl+this.userName+"/repos?client_id="+environment.apiKey).toPromise().then((response: any)=>{
       
        for(var counter=0; counter <22; counter++){
        var repos=response[counter];
        
     
        console.log(typeof repos)
        
       this.repo.name = repos.name,
       this.repo.description = repos.description,
       this.repo.created_at = repos.created_at,
       this.repo.forks = repos.forks,
       this.repo.html_url = repos.html_url,
       
        resolve()
        }
    })
   
    return promise;
    
  })
}


  }


