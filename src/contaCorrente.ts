import {Conta} from "./conta";
import {Cliente} from "./cliente";

export class ContaCorrente extends Conta {
    private _limite:number;
    get limite(): number {
        return this._limite;
    }

    set limite(value: number) {
        this._limite = value;
    }
    constructor(numero:string, cliente:Cliente, limite:number) {
        super(numero, cliente);
        this.limite = limite ? limite : 0;
    }

    public transferir(contaDestino:Conta, valor:number) {
        this.sacar(valor);
        contaDestino.depositar(valor)
    }

    public calcularSaldo() {
        let saldoParcial:number;

        saldoParcial = this.calcularTotalCredito() - this.calcularTotalDebito();
        return saldoParcial + this.limite;
    }
}