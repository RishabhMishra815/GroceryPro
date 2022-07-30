import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: any[] = [];
  catId =3;

  constructor(private dataservice : DataService) {
    this.dataservice.getProductsByCatId(this.catId).subscribe((response: any) => {
      this.products = response.data;
    })
   }

  ngOnInit(): void {
  }

}
