import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _auth: AuthService) {
    _auth.handleAuthentication();
  }

  login() {
    this._auth.login();
  }
  logout() {
    this._auth.logout();
  }
}
