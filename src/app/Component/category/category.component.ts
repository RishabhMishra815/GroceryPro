import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:any;
  constructor(private dataservice: DataService, private route: Router){
    this.dataservice.getCategories().subscribe((response:any) =>{
      this.categories = response.data;
    })
  }

  onSubmitHandler(catId: any){
      this.route.navigate(['/products',catId])
  }

  ngOnInit(): void {
  }

}
