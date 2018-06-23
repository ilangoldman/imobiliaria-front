import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImovelService } from '../../_service/imovel.service';
import { Reclamacao } from '../../_model/reclamacao';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-resposta-dialog',
  templateUrl: './resposta-dialog.component.html',
  styleUrls: ['./resposta-dialog.component.css']
})
export class RespostaDialogComponent implements OnInit {
  public reclamacao: any;

  constructor(
    public dialogRef: MatDialogRef<RespostaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private imovelService: ImovelService,
    private user: UserService
  ) {
    this.reclamacao = data.r;
  }

  ngOnInit() {
  }

  responder(resposta) {
    this.imovelService.responderReclamacao(this.reclamacao.id_reclamacao, resposta).then((val)=>{
      if(val){
        alert("Resposta criada com sucesso!");
        this.user.UpdateImovelUser();
      }
    });
    this.dialogRef.close();
  }

}
