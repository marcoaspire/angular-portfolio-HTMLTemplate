import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { lastValueFrom } from 'rxjs';
import { Product } from '../../interfaces/page-info.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products:Product[]=[];
  constructor(private route:ActivatedRoute,
              public productService:ProductsService
    ) { }


    async ngOnInit(): Promise<void> {

      /*
      const products:Product[]=[];



      await lastValueFrom(this.route.params)
      .then((params) => {
        console.log(params);

        this.productService.searchProduct(params['arg']);
        this.productService.loading=false;

        //console.log("productos leidos");
        //console.log(this.products);
        this.products=this.productService.filterProducts;

        console.log("filtrados");
        console.log(this.products);

      });
      */

      this.route.params.subscribe(params => {
        console.log(params['arg']);
        this.productService.searchProduct(params['arg']);
      });





    }


}
