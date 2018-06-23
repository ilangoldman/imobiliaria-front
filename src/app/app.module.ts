import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImovelComponent } from './imovel/imovel.component';
import { InquilinoComponent } from './inquilino/inquilino.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRouting } from './app.routing';
import { MaterialModule } from './core/MaterialModule';
import { CurrencyFormatPipe } from './_pipe/currency-format.pipe';
import { RespostaDialogComponent } from './proprietario/resposta-dialog/resposta-dialog.component';
import { ReclamacaoDialogComponent } from './inquilino/reclamacao-dialog/reclamacao-dialog.component';
import { ImovelDialogComponent } from './proprietario/imovel-dialog/imovel-dialog.component';
import { AlugarDialogComponent } from './inquilino/alugar-dialog/alugar-dialog.component';
import { RelatorioComponent } from './proprietario/relatorio/relatorio.component';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImovelComponent,
    InquilinoComponent,
    ProprietarioComponent,
    LoginComponent,
    CadastroComponent,
    CurrencyFormatPipe,
    RespostaDialogComponent,
    ReclamacaoDialogComponent,
    ImovelDialogComponent,
    AlugarDialogComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    MaterialModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [
    ImovelDialogComponent,
    RespostaDialogComponent,
    ReclamacaoDialogComponent,
    AlugarDialogComponent,
    RelatorioComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
