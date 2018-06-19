import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public searchBar = false;
  public logged;

  constructor() {
  }

  toogleSearch() {
    this.searchBar = !this.searchBar;
  }

  closeSearch() {
    this.searchBar = false;
  }

  openSearch() {
    this.searchBar = true;
  }

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }

}
