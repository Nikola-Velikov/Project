import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string|null = null
  constructor(private authService: ApiService, private router: Router){

  }
loginHendler(form:NgForm):void{

  if (form.invalid) { return; }
  const {email,password} = form.value;
  console.log(1);
  
  this.authService.login(email, password)
    .subscribe( {

      next:(token:any)=> {
        console.log(3);
        
     localStorage.setItem('token',token)
       sessionStorage.setItem('istrue','true')
    },
      error:(err)=>{
        if(err.error?.text.includes('In')){
          this.error = err.error.text
        }
      }
      
      
    }
    
    );
}
}
