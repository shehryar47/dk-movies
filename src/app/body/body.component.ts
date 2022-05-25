import { Component, OnInit } from '@angular/core';

import { MoviesServiceService } from '../movies-service.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent  {
 data:any=[];
  constructor(private movies:MoviesServiceService) { 
    this.movies.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
      
    })
  }

  

}
