import {Cliente} from "./cliente";

export class Endereco {
  private _cep: string;
  private _logradouro: string;
  private _numero: string;
  private _complemento: string;
  private _cidade: string;
  private _uf: string;
  private _cliente:Cliente;

  constructor(cep:string, logradouro:string, numero:string, complemento:string, cidade:string, uf:string, cliente:Cliente) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.cidade = cidade;
    this.uf = uf;

    if(!cliente) {
      throw new Error('É necessário adicionar um cliente');
    }
    this.cliente = cliente;
  }

  public get uf(): string {
    return this._uf;
  }
  public set uf(value: string) {
    this._uf = value;
  }
  public get cidade(): string {
    return this._cidade;
  }
  public set cidade(value: string) {
    this._cidade = value;
  }
  public get complemento(): string {
    return this._complemento;
  }
  public set complemento(value: string) {
    this._complemento = value;
  }
  public get numero(): string {
    return this._numero;
  }
  public set numero(value: string) {
    this._numero = value;
  }
  public get logradouro(): string {
    return this._logradouro;
  }
  public set logradouro(value: string) {
    this._logradouro = value;
  }
  
  public get cep(): string {
    return this._cep;
  }
  public set cep(value: string) {
    this._cep = value;
  }

  public get cliente(): Cliente {
    return this._cliente;
  }

  private set cliente(value: Cliente) {
    this._cliente = value;
  }
}