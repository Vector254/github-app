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
  repos:Repos[];

  constructor( private userService:UserRequestService) { }

  ngOnInit(){
    this.userService.getDefault()
    this.user = this.userService.user
    this.userService.getRepos()
    this.repos=this.userService.repo
}
}
