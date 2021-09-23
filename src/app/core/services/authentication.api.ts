import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHandlerService } from 'src/app/core/services/http-handler.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpHandlerService,
    private userService: UserService) {
  }

  validateUsername(userName:string){
    return this.http.post("/User/Auth/Validate", { userName })
  }

  authenticate(token: string, password: string) {
    return this.http.post("/User/Auth/Authenticate", { password }, null, {Authorization:`Bearer ${token}`})
  }

  setPassword(token: string, password: string, otp: string) {
    return this.http.post("/User/SetPassword", { password, otp }, null, {Authorization:`Bearer ${token}`})
  }

  logout() {
    return this.http.post("/User/Token/Revoke", this.userService.getToken().token)
  }

}
