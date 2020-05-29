import { Component, OnInit } from '@angular/core';
import { TheaterService } from './services/theater.service';
import { Theater } from './models/theater.model';
import { faEye, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  faEye = faEye;
  faUserEdit = faUserEdit;
  faTrash = faTrash;

  theatersInDb: Theater[];
  theatersAvailable: boolean = false;

  constructor(private theaterService: TheaterService) { }

  setTheatersInDb(theaters: any) {
    this.theatersInDb = theaters;
  }

  ngOnInit() {
    this.theaterService.getAllTheaters().subscribe(
      (data: any) => {
        this.theatersInDb = data;
        if (Object.keys(this.theatersInDb).length) {
          this.theatersAvailable = true;
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
