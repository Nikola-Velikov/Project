import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { k } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  
  loadPosts() {
    return  this.httpClient.get<any[]>('http://localhost:3000/home',{

     
    })
  }
    postPosts(profile:any) {
      profile = JSON.stringify(profile)
    return  this.httpClient.post('http://localhost:3000/create',
     profile
    ,{
      headers:{
        'Content-type':'application/json'
      }
    })
  }

}
