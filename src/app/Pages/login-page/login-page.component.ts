import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 responseClass = ''
 responseText =  ''

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmitHandler(FormData : any){
    this.authService.login(FormData).subscribe(
      (response:any) =>{
      this.responseText ='Welcome' + ' ' + response.user.firstName;
      this.responseClass ='alert-success';
      localStorage.setItem('token',response.token)
      localStorage.setItem('user',JSON.stringify(response.user))

    }, 
    (error) => {
      this.responseText ="login failed , try again"
      this.responseClass ='alert-danger';
      
    })
  }

}
