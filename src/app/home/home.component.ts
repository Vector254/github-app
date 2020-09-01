import { Component, OnInit } from '@angular/core';
import {Users} from '../users'
import { UserRequestService} from '../user-request.service';
import {Repos} from '../repos'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:Users;
  repos:any;
  username:string

  constructor( private userService:UserRequestService) { 
   
    
    this.userService.getRepos().subscribe(repo =>{
      this.userService.updateData(this.username)
      console.log(repo)
      this.repos = repo
  });
}
search(){

  this.userService.updateData(this.username)
  this.userService.getUser()
  this.user = this.userService.user
  this.userService.getRepos().subscribe(repo =>{
    console.log(repo)
    this.repos = repo
  });
}
  ngOnInit(){
     
    this.userService.getUser()
    this.user = this.userService.user
    
  }
}
