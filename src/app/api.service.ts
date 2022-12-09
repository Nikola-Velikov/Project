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
    register(email:string,password:string) {
     
    return  this.httpClient.post('http://localhost:3000/auth/register',
    {
email,password
    })
    
    

}
}
