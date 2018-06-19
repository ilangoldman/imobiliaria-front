import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { ImovelService } from '../_service/imovel.service';
import { ReclamacaoDialogComponent } from './reclamacao-dialog/reclamacao-dialog.component';
import { MatDialog } from '@angular/material';
import { AlugarDialogComponent } from './alugar-dialog/alugar-dialog.component';
import { RelatorioComponent } from 'src/app/proprietario/relatorio/relatorio.component';

@Component({
  selector: 'app-inquilino',
  templateUrl: './inquilino.component.html',
  styleUrls: ['./inquilino.component.css']
})
export class InquilinoComponent implements OnInit {

  constructor(
    private user: UserService,
    private imovelService: ImovelService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openRelatorio(id) {
    const dialogRef = this.dialog.open(RelatorioComponent, {
      width: '80%',
      height: '80%',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  openImovel(id = null) {
    const dialogRef = this.dialog.open(AlugarDialogComponent, {
      width: '80%',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  openReclamacao(id) {
    const dialogRef = this.dialog.open(ReclamacaoDialogComponent, {
      width: '80%',
      data: { r: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }
}
