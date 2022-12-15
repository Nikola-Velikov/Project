import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { offer } from '../shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  offer!: any[];
  user!: any;


  constructor(private userSvice: UserService, private router: Router,private activatedRoute: ActivatedRoute,) {}
  ngOnInit(): void {
   this.userSvice.getUser(this.activatedRoute.snapshot.params?.['id']).subscribe({
    next:(value:any)=>{

       this.offer = value.fav;
       this.user = value.user;

console.log(this.user);


        /*for (const line of this.offer) {
        if(  line.favorited.includes(localStorage.getItem('token'))){
          line.owner = 'true'
        }else{
          line.owner = 'false'

        }
          line._id = '/details/' + line._id;
        }*/
    }
   })
 
 
  }
  
}
