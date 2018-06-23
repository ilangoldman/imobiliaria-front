import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
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
  private imovel: any;
  private i: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ImovelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private user: UserService,
    private imovelService: ImovelService,
    private dialog: MatDialog
  ) {
    if (data.id !== null) {
      this.action = 'Editar';
      this.imovel = this.user.imovelCliente.filter((x) => (x.id_imovel === data.id))[0];
    } else {
      this.action = 'Criar';
      this.imovel = new Imovel(null);
    }

    this.i = new FormGroup({
      vl_aluguel: new FormControl(this.imovel.vl_aluguel, Validators.required),
      vl_quartos: new FormControl(this.imovel.vl_quartos),
      vl_banheiros: new FormControl(this.imovel.vl_banheiros),
      vl_area: new FormControl(this.imovel.vl_area),
      cep: new FormControl(this.imovel.cep),
      rua: new FormControl(this.imovel.rua),
      bairro: new FormControl(this.imovel.bairro),
      cidade: new FormControl(this.imovel.cidade),
      estado: new FormControl(this.imovel.estado),
      pais: new FormControl(this.imovel.pais),
    });
  }

  ngOnInit() {
  }

  dialogAction() {
    if (this.action === 'Editar') {
      const upImovel = this.i.value;
      this.imovelService.updateImovel(upImovel,this.imovel.id_imovel)
      .then((val)=>{
        console.log(val);
        if(val == true){
          alert("Imovel alterado com sucesso!");
          this.user.UpdateImovelUser();
        }
      });
    } else if (this.action === 'Criar') {
      const newImovel = this.i.value;
      this.imovelService.criarImovel(newImovel).then((val)=>{
        console.log(val);
        if(val == true){
          alert("Imovel criado com sucesso!");
          this.user.UpdateImovelUser();
        }
      });;
    }
    this.dialogRef.close();
  }

  getErrorMessage(data) {
    return data.hasError('required') ? 'Esse campo é necessário' : '';
  }

}
