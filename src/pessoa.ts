abstract class Pessoa {
  private _cpf: string;
  private _nome: string;
  private _telefone: string;
  public get cpf(): string {
    return this._cpf;
  }
  public set cpf(value: string) {
    this._cpf = value;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(value: string) {
    this._telefone = value;
  }

  constructor(cpf:string, nome:string, telefone:string) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
  }
}