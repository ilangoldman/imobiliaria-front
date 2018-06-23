import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Imovel } from '../../_model/imovel';
import { ImovelService } from '../../_service/imovel.service';
import { UserService } from '../../_service/user.service';
import { AuthService } from '../../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alugar-dialog',
  templateUrl: './alugar-dialog.component.html',
  styleUrls: ['./alugar-dialog.component.css']
})
export class AlugarDialogComponent implements OnInit {
  private imovel: any;

  constructor(
    public dialogRef: MatDialogRef<AlugarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private imovelService: ImovelService,
    private user: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    if (!auth.isLogged()) {
      dialogRef.close();
      this.router.navigate(['login']);
    } else {
      this.imovel = data.imovel;
    }
  }

  ngOnInit() {
  }

  dialogAction() {
    if(this.auth.getTipo() == "1"){
      this.imovelService.alugarImovel(this.imovel.id_imovel).then((val) =>{
        if(val){
          this.router.navigate(['inquilino']);
        }
      });
      this.dialogRef.close();
    }else{
      alert("Você precisar ser um inquilino para alugar.")
    }
  }

}
