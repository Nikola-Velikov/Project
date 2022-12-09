import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm} from "@angular/forms";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: ApiService, private router: Router){

  }
registerhandler(form:NgForm):void{

  if (form.invalid) { return; }
  const {email,password} = form.value;
  this.authService.register(email, password)
    .subscribe( {
      next:(user)=>console.log(user)
      
    });
}
}
