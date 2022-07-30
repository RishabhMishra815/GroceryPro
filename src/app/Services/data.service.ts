import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = ` https://apolis-grocery.herokuapp.com/api/`;

  constructor(private http: HttpClient) { }
  getCategories() {
    return this.http.get(`${this.BASE_URL}category`)
  }
  getSubCategoriesByCatId(catId: number) {
    return this.http.get(`${this.BASE_URL}subCategory/${catId}`)

  }
  getProductsByCatId(catId: number) {
    return this.http.get(`${this.BASE_URL}products/cat/${catId}`)
  }
}