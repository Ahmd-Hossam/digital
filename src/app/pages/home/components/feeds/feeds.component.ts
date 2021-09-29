import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  
  feeds=[
    {
      number:50,
      name:'Followers'
    },
    {
      number:70,
      name:'Posts'
    },
    {
      number:120,
      name:'Groups'
    },
    {
      number:150,
      name:'Likes'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
