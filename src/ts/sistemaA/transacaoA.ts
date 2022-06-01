import { OperacaoA } from "./operacaoA"


export default class TransacaoA {
    private valor: number
    private data: Date
    private operacao: OperacaoA
    constructor(valor: number, data: Date, operacao: OperacaoA) {
        this.valor = valor
        this.data = data
        this.operacao = operacao
    }
    public get obterValor() {
        return this.valor
    }
    public get obterData() {
        return this.data
    }
    public get obterOperacao() {
        return this.operacao
    }
}