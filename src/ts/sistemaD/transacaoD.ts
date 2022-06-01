import { OperacaoD } from "./operacaoD"

export default class TransacaoD {
    private valor: number
    private data: Date
    private operacao: OperacaoD
    constructor(operacao: OperacaoD, valor: number, data: string) {
        this.valor = valor
        this.operacao = operacao
        this.data = new Date(data)
    }
    public get obterDados(){
        let dados = [this.data, this.valor, this.operacao]
        return dados
    }
}