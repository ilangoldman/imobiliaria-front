import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';
import { UserService } from './user.service';
import { Inquilino } from '../_model/inquilino';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private nav: NavigationService,
    private http: HttpClient
  ) { }

  login(email, pwd) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      },),
      withCredentials: true
    };
    return this.http.post("http://localhost/imobiliaria/autenticacao-api/login",{"email":email,"senha":pwd},httpOptions).toPromise()
    .then((val:any) => {
      localStorage.setItem('login', JSON.stringify(val));
      this.nav.login();
      return val.tipo;
    })
  }

  signup(cadastro) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      },),
      withCredentials: true
    };
    var json = {
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
        tipo: (cadastro.tipo == 1 ? '1' : '2'),
      }
    };
    console.log(json);
    return this.http.post("http://localhost/imobiliaria/cliente-api/cliente" ,json,httpOptions).toPromise()
  }

  logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      },),
      withCredentials: true
    };
    this.http.post("http://localhost/imobiliaria/autenticacao-api/logout",{},httpOptions).toPromise().then(() =>{
      console.log("logout");
    })
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
