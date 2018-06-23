import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  loginStatus = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private user: UserService
  ) {
    if (auth.isLogged()) {
      //this.router.navigate([this.auth.getTipo()]);
    }
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Esse campo não pode estar vazio' :
      this.email.hasError('email') ? 'O email não é válido' :
        '';
  }

  clearErro() {
    this.loginStatus = '';
  }

  login(usuario, senha) {
    this.auth.login(usuario, senha)
      .then((res) => {
        this.user.login();
        this.router.navigate([res == "1" ? "inquilino" : "proprietario"]);
      }).catch((err) => {
        console.log(err);
        this.loginStatus = 'erro';
      });
  }

  // completeLogin() {
  //   console.log('logout');
  //   this.router.navigate([this.auth.getTipo() + '/home']);
  // }

  erroLogin() {
    this.loginStatus = 'erro';
  }

  goto(url) {
    this.router.navigate([url]);
  }

}
