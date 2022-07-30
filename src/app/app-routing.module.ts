import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';

import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';

const routes: Routes = [
  {path : "", component:HomeComponent},
  {path:'home',component:  HomeComponent},
  {path:'about',component:  AboutComponent, canActivate :[AuthGuard]},
  {path:'contact',component:  ContactComponent , canActivate :[AuthGuard]},
  {path:'products/:catId',component:  ProductPageComponent, canActivate :[AuthGuard]},
  {path : 'register-page' ,component:RegisterPageComponent},
  {path :'login-page' , component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
