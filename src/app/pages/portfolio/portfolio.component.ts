import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { lastValueFrom } from 'rxjs';
import { Product } from '../../interfaces/page-info.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public prodService:ProductsService) { }
  products:Product[]=[];
  async ngOnInit(): Promise<void> {
    const products:any =  this.prodService.loadProducts();

    await lastValueFrom(products)
    .then((resp:Product[]|any) => {
      this.products=resp;
      // setTimeout(() =>{

      // },2000);
      this.prodService.loading=false;

      //console.log("productos leidos");
      //console.log(this.products);


    });

  }

}
