import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { Imovel } from '../_model/imovel';
import { ImovelService } from '../_service/imovel.service';
import { UserService } from '../_service/user.service';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelComponent implements OnInit {
  private imovel: Imovel;

  constructor(
    public dialogRef: MatDialogRef<ImovelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private imovelService: ImovelService,
    private user: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    this.imovel = data.imovel;
  }

  ngOnInit() {
  }

  dialogAction() {
    if (!this.auth.isLogged()) {
      this.dialogRef.close();
      this.router.navigate(['login']);
    } else {
      this.imovelService.alugarImovel(this.user.user.id, this.imovel);
      this.dialogRef.close();
    }
  }

}
