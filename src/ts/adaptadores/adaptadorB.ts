import { OperacaoA } from "../sistemaA/operacaoA";
import TransacaoA from "../sistemaA/transacaoA";
import transacaoA from "../sistemaA/transacaoA";
import { OperacaoB } from "../sistemaB/operacaoB";
import TransacaoB from "../sistemaB/transacaoB";
import Adaptador from "./adaptador";

export default class AdaptadorB implements Adaptador {
    private transacaoB: TransacaoB
    constructor(transacaoB: TransacaoB) {
        this.transacaoB = transacaoB
    }
    adaptar(): transacaoA {
        let dados = this.transacaoB.obterDados
        let valor = dados[2]
        let data = dados[0]
        let operacao = dados[1]
        if (operacao === OperacaoB.Credito) {
            let transacao = new TransacaoA(valor, data, OperacaoA.Credito)
            return transacao
        } else {
            let transacao = new TransacaoA(valor, data, OperacaoA.Debito)
            return transacao
        }

    }
}