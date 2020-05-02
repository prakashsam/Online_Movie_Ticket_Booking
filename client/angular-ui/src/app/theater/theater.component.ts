import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  seatsRow: any[] = [];
  seatsColumn: any[] = [];

  selectedLayout: any[][] = []

  constructor() { }

  consoleLog() {
    console.log(this.selectedLayout);
    
  }

  ngOnInit(): void {
    console.log("a");
    for (let i = 0; i < 26; i++) {
      this.seatsRow[i] = i;
    }
    console.log("b");
    for (let i = 0; i < 60; i++) {
      this.seatsColumn[i] = i;
    }
    console.log("c");
    
    for (let i = 0; i <= 61; i++) {
      for (let j = 0; j <= 27; j++) {
        this.selectedLayout[i][j] = false;
      }
    }
    console.log("d");
  }

}
