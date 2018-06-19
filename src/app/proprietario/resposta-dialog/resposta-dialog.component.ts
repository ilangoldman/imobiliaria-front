import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImovelService } from '../../_service/imovel.service';
import { Reclamacao } from '../../_model/reclamacao';

@Component({
  selector: 'app-resposta-dialog',
  templateUrl: './resposta-dialog.component.html',
  styleUrls: ['./resposta-dialog.component.css']
})
export class RespostaDialogComponent implements OnInit {
  private reclamacao: Reclamacao;

  constructor(
    public dialogRef: MatDialogRef<RespostaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private imovelService: ImovelService
  ) {
    this.reclamacao = data.r;
  }

  ngOnInit() {
  }

  resposta(resposta) {
    this.imovelService.responderReclamacao(this.reclamacao.id, resposta);
    this.dialogRef.close();
  }

}
