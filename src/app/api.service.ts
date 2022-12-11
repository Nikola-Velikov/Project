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
login(email:string,password:string) {
     
  return  this.httpClient.post('http://localhost:3000/auth/login',
  {
email,password
  })
}
create(color:string,description:string,imageUrl:string,madeIn:string,model:string,
  price:number,seats:number,town:string,year:number
  ){
  return this.httpClient.post('http://localhost:3000/create',{
color,description,imageUrl,madeIn,model,price,seats,town,year
  }
    )
}
/*color: "1111"
​
description: "1111111111111111111111111"
​
imageUrl: "http://jedkew2"
​
madeIn: "111111111"
​
model: "11111111"
​
price: 11
​
seats: 11
​
town: "11111111"
​
year: 11*/ 

}