import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);

    if (this._auth.isAuthenticated()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.error('no paso el guard');
      return false;
    }
  }
}
