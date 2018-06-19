import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../_service/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Imovel } from '../../_model/imovel';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  private imovel: Imovel;

  constructor(
    public dialogRef: MatDialogRef<RelatorioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private user: UserService
  ) {
    this.imovel = this.user.user.imovel.filter((x) => (x.id === data.id))[0];
    // console.log(this.imovel);
  }

  ngOnInit() {
  }

}
