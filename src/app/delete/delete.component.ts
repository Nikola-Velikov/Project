import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: ApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.authService.getDetails(this.activatedRoute.snapshot.params?.['id']).subscribe({
      next:(value)=>{
if(value.owner==localStorage.getItem('token')){

  this.authService
    .del(this.activatedRoute.snapshot.params?.['id'])
    .subscribe({
      next: (value) => {
       
      },
    });
}else{
  this.router.navigate(['/catalog'])
}
      }
    })

    this.router.navigate(['/home']);
  }
}
