import { Component, OnInit } from '@angular/core';
import {UserRequestService} from '../user-request.service'
import {Users} from '../users'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  user:Users;
  constructor(private userRequest:UserRequestService) { }

  ngOnInit() {
   
  }

}
