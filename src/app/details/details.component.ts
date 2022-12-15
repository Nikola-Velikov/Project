import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: string | null = null;
  car: any | null = null;
  del: string | null = null;
  fav: string | null = null;
  owner: string | null = null;
  isFav: boolean | null = null;

  logged: any = localStorage.getItem('token');

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: ApiService
  ) {}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params?.['id'];
    this.authService
      .getDetails(this.activatedRoute.snapshot.params?.['id'])
      .subscribe({
        next: (value) => {
          
          this.del = '/delete/' + value._id;
          this.fav = '/favorite/' + value._id;
          value._id = '/edit/' + value._id;
          this.owner = value.owner;
          this.car = value;
          if(value.favorited.includes(localStorage.getItem('token'))){
            this.isFav=true
          }
        },
      });
  }
}
