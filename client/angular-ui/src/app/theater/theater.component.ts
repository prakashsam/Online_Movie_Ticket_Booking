import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  seatsArray: Array<any>[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      for (let indexs = 0; indexs < 5; indexs++) {
        this.seatsArray[index][indexs] = 0;
      }
    }
    console.log(this.seatsArray);
  }

}
