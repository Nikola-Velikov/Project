import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {
  constructor(
    private router: Router, 
    private service: ApiService) { }

canActivate(route: any, state: RouterStateSnapshot){
  let id= localStorage.getItem('token')
  console.log(this.service.isLogged(id));

  
  if(this.service.isLogged(id)=='false'){
    return true;
  }

      else{

        this.router.navigate(['/home']);
        return false;
      }
  
}
}