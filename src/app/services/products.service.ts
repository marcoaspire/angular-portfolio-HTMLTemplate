import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, DetailsProduct } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading=true;
  products:Product[]=[];
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




}
