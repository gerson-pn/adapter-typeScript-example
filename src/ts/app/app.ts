import AdaptadorB from "../adaptadores/adaptadorB";
import Entrada from "../io/entrada";
import Conta from "../sistemaA/conta";
import Extrato from "../sistemaA/extrato";
import { OperacaoA } from "../sistemaA/operacaoA";
import TransacaoA from "../sistemaA/transacaoA";
import { OperacaoB } from "../sistemaB/operacaoB";
import TransacaoB from "../sistemaB/transacaoB";

console.log(`Bem-vindo(a) ao sistema bancario do banco`);
let execucao = true
let entrada = new Entrada()
let conta = new Conta(0);

while (execucao) {
    console.log(`Por favor selecione uma opcao: `);
    console.log(`1 - Cadastrar transação do tipo A`);
    console.log(`2 - Cadastrar transação do tipo B`);
    console.log(`3 - Cadastrar transação do tipo C`);
    console.log(`4 - Cadastrar transação do tipo D`);
    console.log(`5 - Mostrar extrato`);
    console.log(`0 - Sair`);

    let opcao = entrada.receberNumero('Qual a opcao desejada? ')

    switch (opcao) {
        case 1:
            let dataA = entrada.receberTexto(`Por favor informe a data da transação, no padrão dd/mm/yyyy: `)
            let partesDataA = dataA.split('/')
            let anoA = new Number(partesDataA[2].valueOf()).valueOf()
            let mesA = new Number(partesDataA[1].valueOf()).valueOf()
            let diaA = new Number(partesDataA[0].valueOf()).valueOf()
            let dataTransacaoA = new Date(anoA, mesA, diaA)
            let valorA = entrada.receberNumero(`Por favor, informe o valor da transação: `)
            let operacaoA = entrada.receberNumero(`Por favor, escolha a operação: 1 - Debito ou 2 - Credito: `)
            if (operacaoA === 1) {
                let transacao = new TransacaoA(valorA, dataTransacaoA, OperacaoA.Debito)
                conta.incluirTransacao(transacao);
            } else {
                let transacaoA = new TransacaoA(valorA, dataTransacaoA, OperacaoA.Credito)
                conta.incluirTransacao(transacaoA);
            }
            console.log(`Transação cadastrada`);
            break;
        case 2:
            let dataB = entrada.receberTexto(`Por favor informe a data da transação, no padrão dd/mm/yyyy: `)
            let partesDataB = dataB.split('/')
            let anoB = new Number(partesDataB[2].valueOf()).valueOf()
            let mesB = new Number(partesDataB[1].valueOf()).valueOf()
            let diaB = new Number(partesDataB[0].valueOf()).valueOf()
            let dataTransacaoB = new Date(anoB, mesB, diaB)
            let valorB = entrada.receberNumero(`Por favor, informe o valor da transação: `)
            let operacaoB = entrada.receberNumero(`Por favor, escolha a operação: 1 - Debito ou 2 - Credito: `)
            if (operacaoB === 1) {
                let transacaoB = new TransacaoB(OperacaoB.Debito,valorB,dataTransacaoB)
                let adaptadorB = new AdaptadorB(transacaoB)
                conta.incluirTransacao(adaptadorB.adaptar())
            } else {
                let transacaoB = new TransacaoB(OperacaoB.Credito,valorB,dataTransacaoB)
                let adaptadorB = new AdaptadorB(transacaoB)
                conta.incluirTransacao(adaptadorB.adaptar())
            }
            console.log(`Transação cadastrada`);
            break;
        case 5:
            let extrato = new Extrato(conta)
            extrato.mostrarExtrato()
            break;
        case 0:
            execucao = false
            console.log(`Até logo`);
            break;
        default:
            console.log(`Opcao não entendida`);

    }
}