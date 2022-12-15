import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { GuardGuard } from './shared/guards/guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotLoggedGuard } from './shared/guards/not-logged.guard';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
   component:RegisterComponent,
   canActivate:[NotLoggedGuard]
  },
  {
    path:'login',
    component:LoginComponent,
   canActivate:[NotLoggedGuard]

  },
  {
    path:'create',
    component:CreateComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'catalog',
    component:CatalogComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent,
    canActivate:[GuardGuard]

  },
  {
    path:'edit/:id',
    component:EditComponent,
    canActivate:[GuardGuard]

  },
  {
    path:'delete/:id',
    component:DeleteComponent,
    canActivate:[GuardGuard]

  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate:[GuardGuard]

  },
  {
    path:'favorite/:id',
    component:FavoriteComponent,
    canActivate:[GuardGuard]

  },
  {
    path:'profile/:id',
    component:ProfileComponent,
    canActivate:[GuardGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
