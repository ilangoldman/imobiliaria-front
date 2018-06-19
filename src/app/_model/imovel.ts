import { Endereco } from './endereco';
import { Proprietario } from './proprietario';
import { Reclamacao } from './reclamacao';

export class Imovel {
    private _id: number;
    private _proprietario: Proprietario;
    private _endereco: Endereco;
    private _tipo: String;
    private _fotos: String[];
    private _aluguel: number;
    private _quarto: number;
    private _area: number;
    private _banheiro: number;
    private _suite: number;
    private _status: number;
    private _reclamacao: Reclamacao[];

    public constructor(i, imovel?) {
        if (i !== null) {
            // const i = JSON.parse(imovel);
            this.id = i.id_imovel;
            this.proprietario = new Proprietario(i.responsavel);
            this.endereco = new Endereco(i.cep, i.rua, i.bairro, i.cidade, i.estado, i.pais);
            this.quarto = i.vl_quartos;
            this.area = i.vl_area;
            this.aluguel = i.vl_aluguel;
            this.fotos = i.fotos;
            this.statusNum = i.status_aluguel;
            this.tipo = i.tipo;

            this.reclamacao = [];
            i.reclamacoes.forEach(r => {
                this.reclamacao.push(new Reclamacao(r));
            });
        } else {
            this.endereco = new Endereco(null, null, null, null, null, null);
        }
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get proprietario(): Proprietario {
        return this._proprietario;
    }
    public set proprietario(value: Proprietario) {
        this._proprietario = value;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }
    public set endereco(value: Endereco) {
        this._endereco = value;
    }

    public get tipo(): String {
        return this._tipo;
    }
    public set tipo(value: String) {
        this._tipo = value;
    }

    public get fotos(): String[] {
        return this._fotos;
    }
    public set fotos(value: String[]) {
        this._fotos = value;
    }

    public get aluguel(): number {
        return this._aluguel;
    }
    public set aluguel(value: number) {
        this._aluguel = value;
    }

    public get quarto(): number {
        return this._quarto;
    }
    public set quarto(value: number) {
        this._quarto = value;
    }

    public get area(): number {
        return this._area;
    }
    public set area(value: number) {
        this._area = value;
    }

    public get banheiro(): number {
        return this._banheiro;
    }
    public set banheiro(value: number) {
        this._banheiro = value;
    }

    public get status(): String {
        return (this._status == 1) ? 'Disponível' : 'Alugado';
    }
    public get statusNum(): number {
        return this._status;
    }
    public set statusNum(value: number) {
        this._status = value;
    }

    public get suite(): number {
        return this._suite;
    }
    public set suite(value: number) {
        this._suite = value;
    }

    public get reclamacao(): Reclamacao[] {
        return this._reclamacao;
    }
    public set reclamacao(value: Reclamacao[]) {
        this._reclamacao = value;
    }

}
