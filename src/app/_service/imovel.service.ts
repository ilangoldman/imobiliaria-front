import { Injectable } from '@angular/core';
import { Imovel } from '../_model/imovel';
import { environment } from '../../environments/environment.prod';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private http: HttpClient) { }

  public getImovel():Observable<Imovel[]>{
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get<Imovel[]>("http://localhost/imobiliaria/imoveis-api/imoveis",httpOptions);
  }



  public getImovelUser(): Observable<Imovel[]> {
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get<Imovel[]>("http://localhost/imobiliaria/imoveis-api/imoveis/cliente",httpOptions);
  }

  // imovel
  public criarImovel(json) {
    console.log(json);
    const httpOptions = {
      withCredentials: true
    };
    return this.http.post("http://localhost/imobiliaria/imoveis-api/imoveis",json,httpOptions).toPromise();
  }

  public updateImovel(json,id) {
    console.log(json);
    const httpOptions = {
      withCredentials: true
    };
    return this.http.put("http://localhost/imobiliaria/imoveis-api/imoveis/"+id,json,httpOptions).toPromise();
  }

  public alugarImovel(id) {
    const httpOptions = {
      withCredentials: true
    };
    return this.http.post("http://localhost/imobiliaria/aquisicao-api/aquisicao",{id_imovel:id},httpOptions).toPromise();
  }

  public cancelarAluguelImovel(id) {
    const httpOptions = {
      withCredentials: true
    };
    return this.http.delete("http://localhost/imobiliaria/aquisicao-api/aquisicao/"+id,httpOptions).toPromise();
  }

  public deleteImovel(id) {
    const httpOptions = {
      withCredentials: true
    };
    return this.http.delete("http://localhost/imobiliaria/imoveis-api/imoveis/"+id,httpOptions).toPromise();
  }


  public criarReclamacao(idImovel, reclamacao) {
    const httpOptions = {
      withCredentials: true
    };
    var r = {
      id_imovel: idImovel,
      txt_reclamacao: reclamacao
    };
    return this.http.post("http://localhost/imobiliaria/imoveis-api/reclamacao",r,httpOptions).toPromise();
  }

  public responderReclamacao(id, resposta) {
    console.log;
    const httpOptions = {
      withCredentials: true
    };
    const r = {
      id_reclamacao: id,
      resposta: resposta
    };
    return this.http.put("http://localhost/imobiliaria/imoveis-api/reclamacao",r,httpOptions).toPromise();
  }


}
