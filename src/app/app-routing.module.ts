import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
   component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'catalog',
    component:CatalogComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path:'delete/:id',
    component:DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
