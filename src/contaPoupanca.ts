import {Conta} from "./conta";
import {Cliente} from "./cliente";

export class ContaPoupanca extends Conta {
    private _saldo: number;
    public get saldo(): number {
        return this._saldo;
    }

    private set saldo(value: number) {
        this._saldo = value;
    }
    constructor(numero:string, cliente:Cliente) {
        super(numero, cliente);
    }

    public calcularSaldo():number {
        this.saldo = this.calcularTotalCredito() - this.calcularTotalDebito();
        return this.saldo;
    }
}