import {Credito} from './credito';
import {Debito} from './debito';
import {Cliente} from "./cliente";

export abstract class Conta {
  private _numero: string;
  private creditos: Credito[] = [];
  private debitos: Debito[] = [];
  private _cliente:Cliente;
  constructor(numero:string, cliente:Cliente) {
    this.numero = numero;

    this.cliente = cliente;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  private set cliente(value: Cliente) {
    this._cliente = value;
  }
  get numero(): string {
    return this._numero;
  }

  private set numero(value: string) {
    this._numero = value;
  }

  /**
   * depositar
   */
  public depositar(valor: number) {
    let data: Date = new Date();
    this.creditos.push(new Credito(valor, data));
  }

  /**
   * sacar
   */
  public sacar(valor: number) {

    if(!this.temSaldoSuficiente(valor)) {
      throw new Error('Saldo insuficiente para esta operação');
    }

    let data: Date = new Date();
    this.debitos.push(new Debito(valor, data));
    
  }

  protected calcularTotalCredito(): number {
    return this.creditos.reduce((total, credito) => total + credito.valor, 0);
  }

  protected calcularTotalDebito(): number {
    return this.debitos.reduce((total, debito) => total + debito.valor, 0)
  }

  private temSaldoSuficiente(valorDebito: number):boolean {
    return this.calcularTotalCredito() > (this.calcularTotalDebito() + valorDebito);
  }
}