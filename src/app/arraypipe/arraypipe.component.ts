import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraypipe',
  templateUrl: './arraypipe.component.html',
  styleUrls: ['./arraypipe.component.css']
})
export class ArraypipeComponent implements OnInit {
  object: {[key:number]:string} = 
 {2:'Angular keyvalue Pipe', 1:'Angular ngFor'};
 
 map=new Map([[2, 'Angular keyvalue Pipe'], [1, 'Angular ngFor']]);
 
 array= ["Angular keyvalue Pipe","Angular ngFor"]

  constructor() { }

  ngOnInit(): void {
  }

}
