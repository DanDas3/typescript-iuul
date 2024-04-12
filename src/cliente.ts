import {Pessoa} from './pessoa'
import {IUsuario} from './iusuario'
import {Endereco} from './endereco'
export class Cliente extends Pessoa implements IUsuario {
  
  private vip: boolean;
  private enderecos:Endereco[]

  constructor(cpf:string, nome:string, telefone:string) {
    super(cpf, nome, telefone)
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

}