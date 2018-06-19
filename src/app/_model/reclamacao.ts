export class Reclamacao {
    private _id: number;
    private _resposta: String;
    private _reclamacao: String;

    public constructor(r, reclamacao?) {
        // const r = JSON.parse(reclamacao);
        this.id = r.id_reclamacao;
        this.reclamacao = r.reclamacao;
        this.resposta = r.resposta;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get reclamacao(): String {
        return this._reclamacao;
    }
    public set reclamacao(value: String) {
        this._reclamacao = value;
    }
    public get resposta(): String {
        return this._resposta;
    }
    public set resposta(value: String) {
        this._resposta = value;
    }

}
