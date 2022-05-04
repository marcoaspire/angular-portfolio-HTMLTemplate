import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { DetailsProduct, ProductDes } from '../../interfaces/page-info.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product!:ProductDes;
  id:string= '';

  constructor( private route:ActivatedRoute,public productService:ProductsService ) { }

  ngOnInit(): void {

this.route.params.subscribe(params => {
  this.productService.getProduct(params['id'])
  .subscribe( (p:DetailsProduct) => {
    this.id= params['id'];
    this.product=p.results;
  } );

});

  }

}
