  
import { Component } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {

  info: any = null;

  constructor(private covidService: CovidServiceService) { 

    this.covidService.getAll().subscribe((data)=>{
      this.info = data;
    });

  }


}
