import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Imovel } from '../_model/imovel';
import { ImovelService } from '../_service/imovel.service';
import { NavigationService } from '../_service/navigation.service';
import { MatDialog } from '@angular/material';
import { AlugarDialogComponent } from '../inquilino/alugar-dialog/alugar-dialog.component';
import { ImovelComponent } from '../imovel/imovel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imovel: Imovel[] = [];
  public fotos: number[] = [];
  public filter: Imovel[];

  constructor(
    private imovelService: ImovelService,
    private nav: NavigationService,
    public dialog: MatDialog
  ) { }

  filterEndereco(value) {
    if (value === '') {
      this.filter = this.imovel;
    } else {
      this.filter = this.imovel
        .filter((i) =>
          (i.endereco.cidade.toLowerCase().match(value.toLowerCase()) ||
          i.endereco.bairro.toLowerCase().match(value.toLowerCase()))
        );
    }
  }

  ngOnInit() {
    this.getImovel();
  }

  filterImovel(tipo) {
    if (tipo === 'tudo') {
      this.filter = this.imovel;
    } else {
      this.filter = this.imovel.filter((x) => (x.tipo === tipo));
    }
  }

  getImovel() {
    this.imovelService.getImovel()
      .subscribe(imovel => {
        this.imovel = imovel;
        console.log(imovel);
        this.imovel.forEach(element =>{
          element.fotos = [
              "http://www.imovelweb.com.br/noticias/wp-content/uploads/2017/10/corretagem.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzMq_v4J_SVvV92FdCX_I7XPxVzewlis6W_RWBm3_-CfngsRY",
              "https://www.foxterciaimobiliaria.com.br/noticias/wp-content/uploads/2016/10/imoveis-internet.jpg",
              "https://mullerimoveisrj.com.br/wp-content/uploads/2017/06/DUPLA-VENDA.jpg",
              "http://www.2rirp.com.br/uploads/post/image/36/content_big_locacao.png",
              "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg"
            ];
        })
        this.imovel.forEach(i => {

          this.fotos.push(0);
        });
        this.filter = this.imovel;
        console.log(this.filter);
      });

    // console.log(this.imovel[0].aluguel);
  }

  getFoto(index) {
    return this.fotos[index];
  }

  nextFoto(index) {
    if (this.fotos[index] >= this.imovel[index].fotos.length - 1) {
      this.fotos[index] = 0;
    } else {
      this.fotos[index]++;
    }
  }

  openAlugar(imovel) {
    const dialogRef = this.dialog.open(AlugarDialogComponent, {
      width: '80%',
      // height: '80%',
      data: { imovel: imovel }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  openDetalhes(imovel) {
    const dialogRef = this.dialog.open(ImovelComponent, {
      width: '80%',
      height: '80%',
      data: { imovel: imovel }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

}
