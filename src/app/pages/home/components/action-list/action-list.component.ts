import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {
  items=[
    { 
      img:'assets/img/home/action list/group.png',
      small:'Jira',
      title:'-Task from jira needs your attention!',
      description:'Here we can add some details about the … ',
      actions:false,
    },

    { 
      img:'assets/img/home/action list/seal.png',
      small:'TAS',
      title:'-Sample received from customer!',
      description:'Here we can add some details about the … ',
      actions:true,
    },

    { 
      img:'assets/img/home/action list/lamp.png',
      small:'EPPM',
      title:'-Sample received from customer..',
      description:'Here we can add some details about the … ',
      actions:true,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
