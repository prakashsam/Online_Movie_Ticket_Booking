import { Component, OnInit } from '@angular/core';
import { TheaterService } from './services/theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  seatsArray: Array<any>[] = [];

  constructor( private theaterService: TheaterService) { }

  ngOnInit(){
    this.theaterService.getAllTheaters().subscribe(
      (data: any) => {
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
