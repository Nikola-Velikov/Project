
import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { k } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotels:any|null = null
constructor(private api:ApiService){

}
  ngOnInit(): void {
 
      
    }

    
  

  

}
