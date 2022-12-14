import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ApiService } from 'src/app/api.service';



@Injectable({
  providedIn: 'root',
})
export class OwnerGuard implements CanActivate {
  constructor(private router: Router, private service: ApiService) {}
  canActivate(
    router: any,

    state: RouterStateSnapshot
  ) {
    if (router.params.id == localStorage.getItem('token')?.toString()) {
      return true;
    } else {
      this.router.navigate(['/catalog']);
      return false;
    }
  }
}
