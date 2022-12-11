import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { k } from './interfaces';
import { offer } from './shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadPosts() {
    return this.httpClient.get<any[]>('http://localhost:3000/home', {});
  }
  register(email: string, password: string) {
    return this.httpClient.post('http://localhost:3000/auth/register', {
      email,
      password,
    });
  }
  login(email: string, password: string) {
    return this.httpClient.post('http://localhost:3000/auth/login', {
      email,
      password,
    });
  }
  create(
    color: string,
    description: string,
    imageUrl: string,
    madeIn: string,
    model: string,
    price: number,
    seats: number,
    town: string,
    year: number
  ) {
    return this.httpClient.post('http://localhost:3000/create', {
      color,
      description,
      imageUrl,
      madeIn,
      model,
      price,
      seats,
      town,
      year,
    });

  }

getOffers(){
  return this.httpClient.get<offer[]>('http://localhost:3000/catalog')
}
getDetails(id:string){
  return this.httpClient.get<offer>('http://localhost:3000/car/details/'+id)
}
}
