import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TheaterService } from "./../../services/theater.service";
import { Router } from '@angular/router';
import { Theater } from '../../models/theater.model';

@Component({
  selector: 'app-theater-create',
  templateUrl: './theater-create.component.html',
  styleUrls: ['./theater-create.component.scss']
})
export class TheaterCreateComponent implements OnInit {

  createTheaterForm = this.fb.group({
    name:['', Validators.required],
    description:['', Validators.required],
    poster:['', Validators.required],
    rowCount:['', Validators.required],
    columnCount:['', Validators.required]
  })

  theatersInDb: Theater[];

  @ViewChild('closeModal') closebutton: any;
  
  @Output() theaterEvent = new EventEmitter<Theater[]>();

  consoleLog() {
    console.log(this.createTheaterForm.value);
  }

  getTheatersInDbAndEmit() {
    this.theaterService.getAllTheaters().subscribe(
      (data: any) => { 
        this.theatersInDb = data;
        this.theaterEvent.emit(this.theatersInDb);
        console.log("emiited from theater-create to theater");
        this.closebutton.nativeElement.click();
        console.log("modal closed");
        
      },
      (err: any) => {
        console.log("Getting theaters in db in create theater component ",err);
      }
    );
  }

  createTheater() {
    var theater: Theater = {
      name: this.createTheaterForm.value.name,
      description: this.createTheaterForm.value.description,
      poster: this.createTheaterForm.value.poster,
      seatAvaliable: this.createTheaterForm.value.rowCount * this.createTheaterForm.value.columnCount,
      seats: this.createSeatLayout(this.createTheaterForm.value.rowCount, this.createTheaterForm.value.columnCount)
    };
    this.theaterService.createTheater(theater).subscribe(
      (data: any) => {
        console.log("Theater created in DB", data);
        this.getTheatersInDbAndEmit();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  createSeatLayout(rowCount: number, columnCount: number): Array<any> {
    var seatLayout = new Array();
    for (var i = 0; i < rowCount; i++) {
      seatLayout[i] = new Array(columnCount);
      for (var j = 0; j < columnCount; j++) {
        seatLayout[i][j] = 0;
      }
    }
    return seatLayout;
  }

  constructor(private fb: FormBuilder, private theaterService: TheaterService, private router: Router) { }

  ngOnInit(): void {
  }

}
