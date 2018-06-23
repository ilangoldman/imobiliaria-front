import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_service/user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  private c: FormGroup;
  private tipo;

  constructor(
    private auth: AuthService,
    private router: Router,
    private user: UserService
  ) {
    if (auth.isLogged()) {
      this.router.navigate([this.auth.getTipo()]);
    }

    this.c = new FormGroup({
      email: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
      nome: new FormControl(''),
      cpf: new FormControl(''),
      rg: new FormControl(''),
      tel: new FormControl(''),
    });

    this.tipo = 1;
  }

  ngOnInit() {
  }

  goto(url) {
    this.router.navigate([url]);
  }

  changeTipo(t) {
    this.tipo = t;
  }

  cadastro() {
    const json = this.c.value;
    json.tipo = this.tipo;
    this.auth.signup(this.c.value)
      .then((res) => {
        console.log(res);
        if(res){
          alert("Cliente criado com sucesso!");
          this.router.navigate(["login"]);
        }
      }).catch((err) => {
        console.log(err);
      });
  }

}
