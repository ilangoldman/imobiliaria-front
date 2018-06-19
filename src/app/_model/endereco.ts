export class Endereco {
    private _cep: number;
    private _cidade: String;
    private _bairro: String;
    private _rua: String;
    private _numero: number;
    private _estado: String;
    private _pais: String;


    public constructor(cep, rua, bairro, cidade, estado, pais) {
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.estado = estado;
        this.pais = pais;
    }

    public get cep(): number {
        return this._cep;
    }
    public set cep(value: number) {
        this._cep = value;
    }

    public get cidade(): String {
        return this._cidade;
    }
    public set cidade(value: String) {
        this._cidade = value;
    }

    public get bairro(): String {
        return this._bairro;
    }
    public set bairro(value: String) {
        this._bairro = value;
    }

    public get rua(): String {
        return this._rua;
    }
    public set rua(value: String) {
        this._rua = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    public get estado(): String {
        return this._estado;
    }
    public set estado(value: String) {
        this._estado = value;
    }

    public get pais(): String {
        return this._pais;
    }
    public set pais(value: String) {
        this._pais = value;
    }


}
