import { Injectable } from '@angular/core';
import { Proprietario } from '../_model/proprietario';
import { Inquilino } from '../_model/inquilino';
import { AuthService } from './auth.service';
import { ImovelService } from './imovel.service';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user;

  constructor(
    private auth: AuthService,
    private imovel: ImovelService,
    private router: Router,
    private nav: NavigationService
  ) {
    if (auth.isLogged()) {
      this.login();
    }
   }

  public getProprietario(): Proprietario {
    const strI = `{
        "id_cliente": "1",
        "nome": "Teste Nougueira",
        "cpf": "12345678900",
        "id_user": "1",
        "rg": "123456789",
        "email_contato": "teste@outlook.com",
        "tel_contato": "11234567890"
      }`;
    const i = JSON.parse(strI);
    const p = new Proprietario(i);
    p.imovel = this.imovel.getImovelUser(p.id);
    return p;
  }

  public getInquilino(): Inquilino {
    const strI = `{
        "id_cliente": "1",
        "nome": "Teste Nougueira",
        "cpf": "12345678900",
        "id_user": "1",
        "rg": "123456789",
        "email_contato": "teste@outlook.com",
        "tel_contato": "11234567890"
      }`;
    const i = JSON.parse(strI);
    const inq =  new Inquilino(i);
    inq.imovel = this.imovel.getImovelUser(inq.id);
    return inq;
  }

  public get user() {
    return this._user;
  }
  public set user(value) {
    this._user = value;
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
    console.log('MORRI MESMO!!!!' + this.user.id);
  }

  login() {
    const tipo = this.auth.getTipo();
    if (tipo === 'inquilino') {
      this.user = this.getInquilino();
    } else if (tipo === 'proprietario') {
      this.user = this.getProprietario();
    }
  }

  logout() {
    this.auth.logout();
    this.nav.logout();
    this.router.navigate(['']);
  }
}
