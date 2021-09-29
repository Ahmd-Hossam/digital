import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  items=[
    {
      title:'notification',
      icon:'bx bx-bell',
      count:30
    },
    {
      title:'Unread Emails',
      icon:'bx bx-bell',
      count:20
    },
    {
      title:'Meetings',
      icon:'bx bx-bell',
      count:18
    },
    {
      title:'Required Actions',
      icon:'bx bx-bell',
      count:13
    },
    {
      title:'My Tasks',
      icon:'bx bx-bell',
      count:12
    },
    {
      title:'To Do List',
      icon:'bx bx-bell',
      count:11
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
