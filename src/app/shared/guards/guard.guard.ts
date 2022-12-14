import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';


@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router, private service: ApiService) {}

  canActivate(route: any, state: RouterStateSnapshot) {
    let id = localStorage.getItem('token');

    let result = sessionStorage.getItem('istrue');
    if (result == 'true') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}