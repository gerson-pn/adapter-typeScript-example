import { OperacaoC } from "./operacaoC"

export default class TransacaoC {
    private valor: number
    private informacoes: any[]
    constructor(operacao: OperacaoC, valor: number, data: Date) {
        this.informacoes = []
        this.informacoes[0] = data
        this.informacoes[1] = operacao
        this.valor = valor
    }
    public get obterInformacoes() {
        return this.informacoes
    }
    public get obterValor(){
        return this.valor
    }
}