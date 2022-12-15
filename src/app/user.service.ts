import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { 

  }
  getUser(id:any){
return this.httpClient.get('http://localhost:3000/profile/'+id)
  }
}
