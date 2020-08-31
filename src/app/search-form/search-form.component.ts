import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {UserRequestService} from '../user-request.service'
import {Users} from '../users'
import {Repos} from '../repos'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  @Output() searchUser = new EventEmitter<Users>();
  user:Users;
  repo:Repos;
  username:string;

  
  constructor(private userService:UserRequestService) { }

      search(){
        this.userService.updateData(this.username);
        this.userService.getUser()
        this.user = this.userService.user
        this.userService.repoRequest()
        this.repo=this.userService.repo
      }
  ngOnInit() {
   
    
    
  }

}
