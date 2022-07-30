import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  public subcategories : any;
  catId : any;

  constructor(private dataService: DataService,private activatedRoute: ActivatedRoute) { 
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId')
    this.dataService.getSubCategoriesByCatId(this.catId).subscribe((response: any) => {
      this.subcategories = response.data;
    })
  }

  ngOnInit(): void {
  }

}
