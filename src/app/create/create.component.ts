import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private authService: ApiService, private router: Router){

  }
create(form:NgForm){
  if (form.invalid) { return; }
let {color,description,imageUrl,madeIn,model,price,seats,town,year} = form.value
this.authService.create(color,description,imageUrl,madeIn,model,price,seats,town,year).subscribe({
  next:(value)=>console.log(value),
  error:(err)=>console.log(err)
  
})
}
}