import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, DetailsProduct } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading=true;
  products:Product[]=[];
  filterProducts:Product[]=[];

  constructor(private http:HttpClient) {
    //this.loadProducts2();
  }

  // loadProducts2(){
  //   return this.http.get<Product[]>(`http://localhost:24287/api/ProductIDX`)
  //   .subscribe((resp:Product[]) => {
  //     console.log(resp)
  //     this.loading=false;
  //   });
  // }

  loadProducts(){
    return this.http.get<Product[]>(`http://localhost:24287/api/ProductIDX`);
  }

  getProduct(id:number){
    return this.http.get<DetailsProduct>(`http://localhost:24287/api/Product/${id}`);
  }

  searchProduct(arg:string){
    this.loadProducts().subscribe((p:Product[]) => {
      this.products=p;

      if (this.products.length>0)
      {
        this.filter(arg);
      }


      console.log("filtrados");

      console.log(this.filterProducts);

    });

  }

  private filter(arg:string){
    arg=arg.toLowerCase();
    this.filterProducts=[];

    this.products.forEach(prod => {
      const titleLower=prod.title.toLowerCase();
      if (prod.category.indexOf(arg) >= 0 || titleLower.indexOf(arg)>=0 )
      {
        this.filterProducts.push(prod);
      }
    });
  }




}
