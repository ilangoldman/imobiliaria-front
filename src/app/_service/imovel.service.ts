import { Injectable } from '@angular/core';
import { Imovel } from '../_model/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor() { }

  public getImovel(): Imovel[] {
    // TODO
    const strI = `[
      {
          "id_imovel": "1",
          "responsavel": {
              "id_cliente": "1",
              "nome": "Teste Nougueira",
              "cpf": "12345678900",
              "rg": "123456789",
              "email_contato": "teste@outlook.com",
              "tel_contato": "11234567890"
          },
          "fotos": [
            "http://www.imovelweb.com.br/noticias/wp-content/uploads/2017/10/corretagem.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzMq_v4J_SVvV92FdCX_I7XPxVzewlis6W_RWBm3_-CfngsRY",
            "https://www.foxterciaimobiliaria.com.br/noticias/wp-content/uploads/2016/10/imoveis-internet.jpg",
            "https://mullerimoveisrj.com.br/wp-content/uploads/2017/06/DUPLA-VENDA.jpg",
            "http://www.2rirp.com.br/uploads/post/image/36/content_big_locacao.png",
            "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg"
          ],
          "vl_quartos": "2",
          "vl_banheiros": "2",
          "tipo": "apartamento",
          "vl_area": "200",
          "cep": "12345023",
          "rua": "Rua Teste",
          "bairro": "Hello Moto",
          "cidade": "Minas Gerais",
          "estado": "SP",
          "pais": "Brasil",
          "status_aluguel": "1",
          "reclamacoes": [
              {
                  "id_reclamacao": "1",
                  "reclamacao": "Banheiro esta com vazamentos, não consigo fazer minhas necessidades em paz.",
                  "resposta": "Tenho cara de encanador?",
                  "reclamante": {
                      "id_cliente": "13",
                      "nome": "Teste2 Completo",
                      "cpf": "45533438866",
                      "rg": "376009056",
                      "email_contato": "teste2@teste.com",
                      "tel_contato": "9999999"
                  }
              },
              {
                  "id_reclamacao": "2",
                  "reclamacao": "COs vizinhos dessa casa são muito barulhentos!",
                  "resposta": null,
                  "reclamante": {
                      "id_cliente": "13",
                      "nome": "Teste2 Completo",
                      "cpf": "45533438866",
                      "rg": "376009056",
                      "email_contato": "teste2@teste.com",
                      "tel_contato": "9999999"
                  }
              }
          ],
          "vl_aluguel": "1001"
      },
      {
          "id_imovel": "14",
          "responsavel": {
              "id_cliente": "1",
              "nome": "Teste Nougueira",
              "cpf": "12345678900",
              "rg": "123456789",
              "email_contato": "teste@outlook.com",
              "tel_contato": "11234567890"
          },
          "fotos": [
            "http://www.imovelweb.com.br/noticias/wp-content/uploads/2017/10/corretagem.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzMq_v4J_SVvV92FdCX_I7XPxVzewlis6W_RWBm3_-CfngsRY"
          ],
          "vl_quartos": "2",
          "vl_banheiros": "4",
          "vl_area": "80",
          "cep": "12345024",
          "tipo": "casa",
          "rua": "Rua Teste2",
          "bairro": "Teste2",
          "cidade": "São Paulo",
          "estado": "SP",
          "pais": "Brasil",
          "status_aluguel": "2",
          "reclamacoes": [],
          "vl_aluguel": "1500"
      }
    ]`;
    const i = JSON.parse(strI);
    const arr = [];
    i.forEach(element => {
      arr.push(new Imovel(element));
    });
    return arr; // new Imovel(i);
  }

  public getImovelUser(id): Imovel[] {
    // TODO
    // const imovel: Imovel[] = [];
    return this.getImovel();
  }

  // imovel
  public criarImovel(json) {
    // TODO
    const strJSON = JSON.stringify(json);
    console.log('criado: ' + strJSON);
  }

  public updateImovel(json) {
    // TODO
    const strJSON = JSON.stringify(json);
    console.log('criado: ' + strJSON);
  }

  public alugarImovel(inquilino, json) {
    // TODO
    json.inquilino = inquilino;
    const strJSON = JSON.stringify(json);
    console.log('alugar: ' + strJSON);
  }

  public deleteImovel(id) {
    // TODO
    console.log('MORRI' + id);
  }

  // reclamacao
  public criarReclamacao(idImovel, reclamacao) {
    const r = {
      id_imovel: idImovel,
      reclamacao: reclamacao
    };
    const strR = JSON.stringify(r);
    // TODO
    console.log('reclamei: ' + strR);
  }

  public responderReclamacao(id, resposta) {
    // console.log(id);
    const r = {
      id_reclamacao: id,
      resposta: resposta
    };
    const strR = JSON.stringify(r);
    // TODO
    console.log('respondi: ' + strR);
  }

}
