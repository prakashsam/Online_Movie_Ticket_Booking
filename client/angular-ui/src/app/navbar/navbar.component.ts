import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faAddressCard} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSignInAlt = faSignInAlt;
  faAddressCard = faAddressCard;

  brandTitle: string = 'Online Movie Ticket Booking';

  constructor() { }

  ngOnInit(): void {
  }

}
