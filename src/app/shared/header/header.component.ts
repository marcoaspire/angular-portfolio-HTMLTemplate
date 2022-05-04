import { AfterContentInit, Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';
import { PageInfo } from '../../interfaces/page-info.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit,AfterContentChecked,AfterContentInit {
  info !: PageInfo;
  constructor(public _service:PageInfoService) { }



  // async ngOnInit(): Promise<void> {
  //   console.log("resp");
  //   const info =  this._service.getInfo();
  //   await lastValueFrom(info)
  //   .then(resp => {
  //     this.info=resp;
  //   });
  // }
  ngAfterViewInit(){
    this.info=this._service.info;
    console.log("ViewInit");
    console.log(this.info);
  }
  ngAfterContentChecked(): void {
    //console.log("AfterContentChecked");
    this.info=this._service.info;
    //console.log(this.info);
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }



}
