import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImovelService } from '../../_service/imovel.service';
import { Reclamacao } from '../../_model/reclamacao';

@Component({
  selector: 'app-reclamacao-dialog',
  templateUrl: './reclamacao-dialog.component.html',
  styleUrls: ['./reclamacao-dialog.component.css']
})
export class ReclamacaoDialogComponent implements OnInit {
  private id;

  constructor(
    public dialogRef: MatDialogRef<ReclamacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private imovelService: ImovelService
  ) {
    this.id = data.r;
  }

  ngOnInit() {
  }

  criar(reclamacao) {
    this.imovelService.criarReclamacao(this.id, reclamacao);
    this.dialogRef.close();
  }

}
