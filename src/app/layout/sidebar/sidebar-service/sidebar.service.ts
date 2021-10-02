import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  menuItems= [
    {
      img: 'assets/img/sideBar/home.png',
      routerLink: '/home',
    },

    {
      img: 'assets/img/sideBar/tasks.png',
      routerLink: '/company-jobs',
    },

    {
      img: 'assets/img/sideBar/users.png',
      routerLink: '/teams-groups',
    },

    {
      img: 'assets/img/sideBar/circle.png',
      routerLink: '/reports-analytics',
    },

    {
      img: 'assets/img/sideBar/case.png',
      routerLink: '/teams-groups',
    },

    {
      img: 'assets/img/sideBar/shap.png',
      routerLink: '/widgets',
    },

    {
      img: 'assets/img/sideBar/files.png',
      routerLink: '/department',
    },

    
    {
      img: 'assets/img/sideBar/battry.png',
      routerLink: '/widgets',
    },

    {
      img: 'assets/img/sideBar/tv.png',
      routerLink: '/teams-groups',
    },

    {
      img: 'assets/img/sideBar/book.png',
      routerLink: '/department',
    },

    {
      img: 'assets/img/sideBar/settings.png',
      routerLink: '/settings',
    },

    {
      img: 'assets/img/sideBar/info.png',
      routerLink: '/department',
    }
  ];

  constructor() { }

}
