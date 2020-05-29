import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private http: HttpClient) { }

  getAllTheaters(): any {
    return this.http.get("http://localhost:4000/theaters");
  }

  createTheater(createrTheaterForm: any): any {
    return this.http.post("http://localhost:4000/theaters", createrTheaterForm);
  }

}
