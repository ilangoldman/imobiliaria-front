import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NavigationService } from './_service/navigation.service';
import { Router } from '@angular/router';
import { AuthService } from './_service/auth.service';
import { UserService } from './_service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private nav: NavigationService,
    private router: Router,
    private auth: AuthService,
    private user: UserService
  ) {
    if (auth.isLogged()) {
      // this.router.navigate([this.auth.getTipo()]);
    }
  }

  search() {
    if (this.router.url === '/') {
      this.nav.toogleSearch();
    } else {
      this.router.navigate(['']);
      this.nav.openSearch();
    }
  }

  gotoLogin() {
    this.nav.closeSearch();
    this.router.navigate(['login']);
  }
}
