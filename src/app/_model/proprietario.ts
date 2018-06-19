import { Imovel } from './imovel';

export class Proprietario {
    private _id: number;
    // private _user: number;
    private _nome: String;
    private _cpf: String;
    private _rg: String;
    private _email: String;
    private _tel: String;

    private _imovel: Imovel[];

    public constructor(p, proprietario?) {
        // const p = JSON.parse(proprietario);
        this.id = p.id_cliente;
        // this.user = p.user;
        this.nome = p.nome;
        this.cpf = p.cpf;
        this.rg = p.rg;
        this.email = p.email;
        this.tel = p.tel;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    // public get user(): number {
    //     return this._user;
    // }
    // public set user(value: number) {
    //     this._user = value;
    // }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }
    public get primeiro_nome(): String {
        return this._nome.split(' ')[0];
    }

    public get cpf(): String {
        return this._cpf;
    }
    public set cpf(value: String) {
        this._cpf = value;
    }

    public get rg(): String {
        return this._rg;
    }
    public set rg(value: String) {
        this._rg = value;
    }

    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }

    public get tel(): String {
        return this._tel;
    }
    public set tel(value: String) {
        this._tel = value;
    }

    public get imovel(): Imovel[] {
        return this._imovel;
    }
    public set imovel(value: Imovel[]) {
        this._imovel = value;
    }


}
