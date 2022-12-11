import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { offer } from '../shared/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit{
  id:string|null = null
  car:any|null = null
  city:string|null = null;
  constructor(private authService: ApiService, private activatedRoute: ActivatedRoute){

    this.authService.getDetails(this.activatedRoute.snapshot.params?.['id']).subscribe({
      next:(value)=>{
        console.log(value)
      this.car = value;
      console.log(this.car);
      this.city = value.city
   
      
      },
     
      
    })
  }
  ngOnInit(): void {
    this.id =  this.id = this.activatedRoute.snapshot.params?.['id'];
  
  }
edit(form:NgForm){
  if (form.invalid) { return; }
}
}
