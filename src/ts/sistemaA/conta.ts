import TransacaoA from "./transacaoA"

export default class Conta {
    private saldo: number
    private transacoes: TransacaoA[]
    constructor(saldo: number) {
        this.saldo = saldo
        this.transacoes = []
    }
    public incluirTransacao(transacao: TransacaoA): void {
        this.transacoes.push(transacao)
    }
    public get obterTransacoes() {
        return this.transacoes
    }
    public get obterSaldo() {
        return this.saldo
    }
}