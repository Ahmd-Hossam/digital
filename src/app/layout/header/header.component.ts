import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUserName ="Mohamed";
  
  messages=[
    {
      name:"Mohamed Ahmed",
      img:'assets/img/home/posts/Ellipse 36.png',
      status:"active",
      content:"pla pla pla pla",
      time:"",
      timeStatus:"lastSeen"
    },

    {
      name:"Ibrahin Mustafa",
      img:'assets/img/home/posts/Ellipse 36.png',
      status:"unknown",
      content:"pla pla pla pla",
      time:"",
      timeStatus:"lastSeen"
    },

    {
      name:"Mosaad Amin",
      img:'assets/img/home/posts/Ellipse 36.png',
      status:"lastSeen",
      content:"pla pla pla pla",
      time:"",
      timeStatus:"lastSeen"
    },


    {
      name:"Ahmed Hossam",
      img:'assets/img/home/posts/Ellipse 36.png',
      status:"active",
      content:"pla pla pla pla",
      time:"",
      timeStatus:"lastSeen"
    }
  ]

  notifications=[
    {
      day:"today",
      users:[
        {
          name:"Mohamed Ahmed",
          img:'assets/img/home/posts/Ellipse 36.png',
          status:"active",
          content:"Added a new post in",
          action:"Travel Experience",
          time:"",
        },
    
        {
          name:"Ibrahim Mustafa",
          img:'assets/img/home/posts/Ellipse 36.png',
          status:"unknown",
          content:"Commented on your",
          action:"post",
          time:"",
        },
      ]
    },
    {
      day:"yesterday",
      users:[
        {
          name:"Mohsin Tamim",
          img:'assets/img/home/posts/Ellipse 36.png',
          status:"active",
          content:"Added a new photo in ",
          action:"UX Department",
          time:"",
        },
  
      ]
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
    
    //this.currentUserName = this.userService.isAuthenticated() ? this.userService.getCurrentUserData().fullName : '';
  }

  logout() {
  }

 
}
