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
    window.open("https://login.lol-web.games/login?client_id=4ohv3cmaabbo91aduqpvg8o36j&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Flol-web.games",
      "_self");
  }

  logging() {
    const location = window.location.href;
    return location.includes('id_token');
  }

}
