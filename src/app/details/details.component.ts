import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  id:string|null=null
  car:any|null=null;
  del:string|null =null;
  constructor(private activatedRoute: ActivatedRoute,private authService:ApiService) {
  }
  ngOnInit(): void {

   this.id = this.activatedRoute.snapshot.params?.['id'];
  this.authService.getDetails(this.activatedRoute.snapshot.params?.['id']).subscribe({
    next:(value)=>{
     this.del = '/delete/'+value._id
      value._id = '/edit/'+value._id
    
      this.car =value
      console.log(this.car);
      
    }
  })

  
  }
}
