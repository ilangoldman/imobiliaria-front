import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';
import { UserService } from './user.service';
import { Inquilino } from '../_model/inquilino';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private nav: NavigationService
  ) { }

  login(email, pwd) {
    let login = null;
    if (email === 'inquilino' && pwd === 'i') {
      login = {
        email: email,
        tipo: 'inquilino'
      };
    } else if (email === 'proprietario' && pwd === 'p') {
      login = {
        email: email,
        tipo: 'proprietario'
      };
    }

    return new Promise((resolve, reject) => {
      if (login !== null) {
        localStorage.setItem('login', JSON.stringify(login));
        this.nav.login();
        resolve(login.tipo);
      } else {
        reject();
      }
    });
  }

  signup(cadastro) {
    const user = {
      cliente: {
        nome: cadastro.nome,
        cpf: cadastro.cpf,
        rg: cadastro.rg,
        email_contato: cadastro.email,
        tel_contato: cadastro.tel
      },
      user: {
        email: cadastro.email,
        senha: cadastro.pwd,
        tipo: cadastro.tipo,
      }
    };

    console.log(user);
    const strU = JSON.stringify(user);
    return this.login(user.user.email, user.user.senha);
  }

  logout() {
    // this.nav.logout();
    if (this.isLogged()) {
      localStorage.removeItem('login');
    } else {
      this.router.navigate(['']);
    }
  }

  isLogged(): boolean {
    // console.log(localStorage.getItem('login'));
    if (localStorage.getItem('login')) {
      this.nav.login();
      return true;
    } else {
      this.nav.logout();
      return false;
    }
  }

  getTipo() {
    const login = JSON.parse(localStorage.getItem('login'));
    return login.tipo;
  }
}
