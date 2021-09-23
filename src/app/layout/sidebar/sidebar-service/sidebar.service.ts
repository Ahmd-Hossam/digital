import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/core/models/base.models';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menuItems: MenuItem[] = [
    {
      order: 1,
      categoryTitle: '',
      title: 'Home',
      icon: 'bx bx-home-circle',
      routerLink: '/home',
      claims: ['ManageDashboard']
    },
    {
      order: 1,
      categoryTitle: '',
      title: 'Department',
      icon: 'bx bx-home-circle',
      routerLink: '/department',
      claims: ['ManageDashboard']
    },
    {
      order: 1,
      categoryTitle: '',
      title: 'Teams & Groups',
      icon: 'bx bx-home-circle',
      routerLink: '/teams-groups',
      claims: ['ManageDashboard']
    },
    {
      order: 1,
      categoryTitle: '',
      title: 'Reports & Analytics',
      icon: 'bx bx-home-circle',
      routerLink: '/reports-analytics',
      claims: ['ManageDashboard']
    },
    {
      order: 1,
      categoryTitle: '',
      title: 'Company Jobs',
      icon: 'bx bx-home-circle',
      routerLink: '/company-jobs',
      claims: ['ManageDashboard']
    },

    {
      order: 1,
      categoryTitle: '',
      title: 'Widgets',
      icon: 'bx bx-home-circle',
      routerLink: '/widgets',
      claims: ['ManageDashboard']
    },
    {
      order: 1,
      categoryTitle: '',
      title: 'Settings',
      icon: 'bx bx-home-circle',
      routerLink: '/settings',
      claims: ['ManageDashboard']
    },
   
  ];

  constructor(private userService: UserService) { }

  buildMenu() {
    let menus: any[];

    //Get Users Claims
    let claims = this.userService.getCurrentUserClaims();
    //Filter Menu Items allowed for user
    menus = this.menuItems.filter((item: any) => item.claims.some((c: any) => claims.includes(c)))

    // //Group menus by categories
    function groupBy(menus, criteria) {
      const newObj = menus.reduce(function (acc, currentValue) {
        if (!acc[currentValue[criteria]]) {
          acc[currentValue[criteria]] = [];
        }
        acc[currentValue[criteria]].push(currentValue);
        return acc;
      }, {});
      return newObj;
    }

    menus = groupBy(menus, 'categoryTitle')
    return menus;
  }
}
