import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { ImovelService } from '../_service/imovel.service';
import { RespostaDialogComponent } from './resposta-dialog/resposta-dialog.component';
import { MatDialog } from '@angular/material';
import { ImovelDialogComponent } from './imovel-dialog/imovel-dialog.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

@Component({
  selector: 'app-proprietario',
  templateUrl: './proprietario.component.html',
  styleUrls: ['./proprietario.component.css']
})
export class ProprietarioComponent implements OnInit {

  public ImovelCliente:any;

  constructor(
    private user: UserService,
    private imovelService: ImovelService,
    public dialog: MatDialog
  ) { 
    this.imovelService.getImovelUser().toPromise()
    .then((val) =>{
      this.ImovelCliente = val;
      this.user.imovelCliente = val;
    });
  }

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
    const dialogRef = this.dialog.open(ImovelDialogComponent, {
      width: '80%',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  openResposta(r) {
    const dialogRef = this.dialog.open(RespostaDialogComponent, {
      width: '80%',
      data: { r: r }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  deletarImovel(id){
    this.imovelService.deleteImovel(id).then((val) =>{
      if(val){
        alert("Imovel deletado com sucesso!");
        this.user.UpdateImovelUser();
      }
    });
  }

}
