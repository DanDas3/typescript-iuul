import {Pessoa} from './pessoa'
import {IUsuario} from './iusuario'
import {Endereco} from './endereco'
import {Conta} from "./conta";
export class Cliente extends Pessoa implements IUsuario {
  
  private _vip: boolean;
  private enderecos:Endereco[] = [];
  private _contas: Conta[] = [];
  constructor(cpf:string, nome:string, telefone:string, vip:boolean = false,conta:Conta|null = null) {
    super(cpf, nome, telefone)

    if(conta) {
      this.adicionarConta(conta);
    }
  }

  get vip(): boolean {
    return this._vip;
  }

  set vip(value: boolean) {
    this._vip = value;
  }
  get contas(): Conta[] {
    return this._contas;
  }

  public autenticar(): boolean {
    return true;
  }

  public listarEnderecos():Endereco[] {
    return this.enderecos;
  }

  public adicionarEndereco(endereco: Endereco) {
    this.enderecos.push(endereco);
  }

  public adicionarConta(conta:Conta) {
    this._contas.push(conta);
  }

}