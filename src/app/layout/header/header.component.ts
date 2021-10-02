import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUserName ="Mohamed";

  constructor(private router: Router) { }

  ngOnInit() {
    //this.currentUserName = this.userService.isAuthenticated() ? this.userService.getCurrentUserData().fullName : '';
  }

  logout() {
   
  }
}
