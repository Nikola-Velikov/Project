import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(router: Router) {
    sessionStorage.setItem('istrue','false');
    localStorage.clear();

    router.navigate(['/catalog']);
  }
}
