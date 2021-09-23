import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.api';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUserName;

  constructor(private authApi: AuthenticationService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.currentUserName = this.userService.isAuthenticated() ? this.userService.getCurrentUserData().fullName : '';
  }

  logout() {
    this.userService.clear();
    this.router.navigateByUrl('/login')
    this.authApi.logout().subscribe();
  }
}
