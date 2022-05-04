import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info:PageInfo={};
  loaded = false;
  team = {};

  constructor(private http:HttpClient) {
    this.getInfo2();
    //this.loadTeams();
  }

  getInfo(){
    //read json

    return this.http.get(`assets/data/data-page.json`);

    // return this.http.get(`assets/data/data-page.json`)
    // .subscribe( (resp:PageInfo) => {
    //   this.info=resp;
    //   this.loaded=true;
    //   console.log(resp);
    // });
  }
  getInfo2(){
    //read json
     return this.http.get(`assets/data/data-page.json`)
     .subscribe( (resp:PageInfo) => {
       this.info=resp;
       this.loaded=true;
       //console.log(resp);
     });
  }

  /*
  loadTeams(){
    this.http.get(`http://localhost:24287/api/Team`)
    .subscribe( (resp) => {
        this.team=resp;
        console.log(resp);
    });
    return this.team;
  }
  */
  loadTeams2(){
    return this.http.get(`http://localhost:24287/api/Team`);
  }
}

