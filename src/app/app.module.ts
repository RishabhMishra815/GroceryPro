import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';

import { CategoryComponent } from './Component/category/category.component';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ProductComponent } from './Component/product/product.component';
import { SubCategoryComponent } from './Component/sub-category/sub-category.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    CategoryComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    ProductComponent,
    SubCategoryComponent,
    ProductPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
