import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.api';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';

const modes = {
  username: 'username_step',
  password: 'password_step',
  setPassword: 'setPassword_step',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData = {
    userName: '',
    password: '',
    otp: "",
  }
  passwordSet = ""
  token: string;
  modes = modes;
  mode: string = modes.username;
  constructor(private userService: UserService,
    private authApi: AuthenticationService,
    private router: Router, private toastr: ToastrService) {

  }

  ngOnInit() {
  }

  authenticate() {
    this.authApi.authenticate(this.token, this.formData.password).subscribe(response => {
      this.userService.setToken(response)
      if(response.claims.includes('ManageDashboard')){
        this.router.navigateByUrl('/home')
      }else{
        let firstUserClaim = response.claims[0]
        const claimRoute = this.router.config.find(route =>{
          return route.data?.allowedClaims[0] === firstUserClaim
        }) 
        console.log(claimRoute)
        this.router.navigateByUrl(`/${claimRoute.path}`)
      }
    }, (error) => {
      this.toastr.error(error.message)
    })
  }

  validateUsername() {
    this.authApi.validateUsername(this.formData.userName).subscribe(res => {
      console.log(res)
      if (res.isPasswordRequired) {
        this.mode = modes.setPassword
        this.token = res.token;
      } else {
        this.token = res.token;
        this.mode = modes.password
      }
    }, err => {
      const json = err.message.replace(/(\w+):(\w+)/g, `"$1":"$2"`);
      this.toastr.error(JSON.parse(json).message)
    })
  }


  setPassword() {
    this.authApi.setPassword(this.token, this.passwordSet, this.formData.otp).subscribe(res =>{
      this.userService.setToken(res)
      if(res.claims.includes('ManageDashboard')){
        this.router.navigateByUrl('/home')
      }else{
        let firstUserClaim = res.claims[0]
        const claimRoute = this.router.config.find(route =>{
          return route.data?.allowedClaims[0] === firstUserClaim
        }) 
        this.router.navigateByUrl(`/${claimRoute.path}`)
      }
    },err =>{
      const json = err.message.replace(/(\w+):(\w+)/g, `"$1":"$2"`);
      this.toastr.error(JSON.parse(json).message)
    } )
  }

}
