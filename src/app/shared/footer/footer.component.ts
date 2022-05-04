import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';
import { PageInfo } from '../../interfaces/page-info.interface';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,AfterContentChecked {

  year:number = new Date().getFullYear();
  info !: PageInfo;

  constructor(public _service:PageInfoService) { }

  ngOnInit(){
    this.info=this._service.info;
  }

  ngAfterContentChecked(): void {
    this.info=this._service.info;
  }

  // async ngOnInit(): Promise<void> {
  //   console.log("resp");
  //   const info =  this._service.getInfo();
  //   await lastValueFrom(info)
  //   .then(resp => {
  //     this.info=resp;
  //   });
  //   console.log(this.info.email);

  //   console.log(this.info.title);
  // }

}
