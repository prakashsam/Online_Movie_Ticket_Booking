import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  brandTitle: string = 'Online Movie Ticket Booking';

  constructor() { }

  ngOnInit(): void {
  }

}
