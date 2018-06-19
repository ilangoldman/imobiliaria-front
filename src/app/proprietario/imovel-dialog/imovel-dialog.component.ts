import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImovelService } from '../../_service/imovel.service';
import { Imovel } from '../../_model/imovel';
import { UserService } from '../../_service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-imovel-dialog',
  templateUrl: './imovel-dialog.component.html',
  styleUrls: ['./imovel-dialog.component.css']
})
export class ImovelDialogComponent implements OnInit {
  private action: String;
  private imovel: Imovel;
  private i: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ImovelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private user: UserService,
    private imovelService: ImovelService
  ) {
    if (data.id !== null) {
      this.action = 'Editar';
      this.imovel = this.user.user.imovel.filter((x) => (x.id === data.id))[0];
    } else {
      this.action = 'Criar';
      this.imovel = new Imovel(null);
    }

    this.i = new FormGroup({
      aluguel: new FormControl(this.imovel.aluguel, Validators.required),
      quarto: new FormControl(this.imovel.quarto),
      banheiro: new FormControl(this.imovel.banheiro),
      area: new FormControl(this.imovel.area),
      cep: new FormControl(this.imovel.endereco.cep),
      rua: new FormControl(this.imovel.endereco.rua),
      bairro: new FormControl(this.imovel.endereco.bairro),
      cidade: new FormControl(this.imovel.endereco.cidade),
      estado: new FormControl(this.imovel.endereco.estado),
      pais: new FormControl(this.imovel.endereco.pais),
    });
  }

  ngOnInit() {
  }

  dialogAction() {
    if (this.action === 'Editar') {
      const upImovel = this.i.value;
      upImovel.resposavel = this.user.user.id;
      upImovel.id = this.imovel.id;
      this.imovelService.updateImovel(upImovel);
    } else if (this.action === 'Criar') {
      const newImovel = this.i.value;
      newImovel.resposavel = this.user.user.id;
      this.imovelService.criarImovel(newImovel);
    }
    this.dialogRef.close();
  }

  getErrorMessage(data) {
    return data.hasError('required') ? 'Esse campo é necessário' : '';
  }

}
