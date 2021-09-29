import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pages=[
    {
      img:'assets/img/home/pages/Mask Group 55.png',
      title:'Blackstone Memes',
      description:'120 Members'
    },
    {
      img:'assets/img/home/pages/Mask Group 55.png',
      title:'Blackstone Memes',
      description:'120 Members'
    },
    {
      img:'assets/img/home/pages/Mask Group 55.png',
      title:'Blackstone Memes',
      description:'120 Members'
    },
    {
      img:'assets/img/home/pages/Mask Group 55.png',
      title:'Blackstone Memes',
      description:'120 Members'
    },
    {
      img:'assets/img/home/pages/Mask Group 55.png',
      title:'Blackstone Memes',
      description:'120 Members'
    },
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
