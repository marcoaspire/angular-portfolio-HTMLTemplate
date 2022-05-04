import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  team:any;
  constructor(public infoService:PageInfoService) { }

  // ngOnInit(): void {
  //   console.log("teams");
  //   this.team =this.infoService.team;
  //   console.log(this.infoService.team);

  // }

  async ngOnInit(): Promise<void> {
    const team:any =  this.infoService.loadTeams2();

    await lastValueFrom(team)
    .then((resp:[]|any) => {
      //console.log("teams");
      //console.log(resp.length);

      this.team=resp;
    });

  }

}
