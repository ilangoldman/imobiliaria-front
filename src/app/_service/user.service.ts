import { Injectable } from '@angular/core';
import { Proprietario } from '../_model/proprietario';
import { Inquilino } from '../_model/inquilino';
import { AuthService } from './auth.service';
import { ImovelService } from './imovel.service';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public cliente;
  public imovelCliente;

  constructor(
    private auth: AuthService,
    private imovel: ImovelService,
    private router: Router,
    private nav: NavigationService,
    private http: HttpClient
  ) {
    if (auth.isLogged()) {
      this.login();
    }
   }

  public getCliente(){
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get("http://localhost/imobiliaria/cliente-api/cliente",httpOptions).toPromise();
  }


  // d
  public updateUser(nome, cpf, rg, tel) {
    // TODO
    console.log(nome);
    console.log(cpf);
    console.log(rg);
    console.log(tel);
  }

  public deleteUser() {
    // TODO
    console.log('MORRI MESMO!!!!' + this.cliente.id);
  }

  login() {
    this.getCliente().then(val =>{
      this.cliente = val;
    }).then(err => {
      console.log(err);
    });
  }

  logout() {
    this.auth.logout();
    this.nav.logout();
    this.router.navigate(['']);
  }

  UpdateImovelUser(){
    this.imovel.getImovelUser().toPromise()
    .then((val) =>{
      this.imovelCliente = val;
    });
  }
}
