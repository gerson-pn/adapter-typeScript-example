import { OperacaoB } from "./operacaoB"

export default class TransacaoB {
    private dados: any[]
    constructor(operacao: OperacaoB, valor: number, data: Date) {
        this.dados = []
        this.dados[0] = data
        this.dados[1] = operacao
        this.dados[2] = valor
    }
    public get obterDados() {
        return this.dados
    }
}