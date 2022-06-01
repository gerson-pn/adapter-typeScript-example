import Conta from "./conta";
import { OperacaoA } from "./operacaoA";

export default class Extrato {
    private conta: Conta
    constructor(conta: Conta) {
        this.conta = conta
    }
    public mostrarExtrato(): void {
        let saldo = this.conta.obterSaldo
        console.log(`---------------------`);
        console.log(`Saldo inicial: ${saldo}`);
        console.log(`---------------------`);
        this.conta.obterTransacoes.forEach(transacao => {
            if (transacao.obterOperacao == OperacaoA.Credito) {
                saldo = saldo + transacao.obterValor
            } else {
                saldo = saldo - transacao.obterValor
            }
            console.log(`---------------------`);
            console.log(`Transacao:`);
            console.log(`Valor: ${transacao.obterValor}`);
            console.log(`Data: ${transacao.obterData.toLocaleDateString()}`)
            console.log(`Operacao: ${transacao.obterOperacao}`);
            console.log(`---------------------`);
        });
        console.log(`---------------------`);
        console.log(`Saldo final: ${saldo}`);
        console.log(`---------------------`);
    }
}