import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLogin() {
    window.open("https://login.lol-web.games", "_self");
  }

  logging() {
    const location = window.location.href;
    return location.includes('id_token');
  }

}
