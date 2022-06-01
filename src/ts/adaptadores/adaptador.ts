import TransacaoA from "../sistemaA/transacaoA";

export default interface Adaptador {
    adaptar(): TransacaoA
}

