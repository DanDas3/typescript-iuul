export class Debito {
  private _valor: number;
  private _data: Date;

  constructor(valor: number, data: Date) {
    this.data = data;
    this.valor = valor;
  }
  public get valor(): number {
    return this._valor;
  }
  private set valor(value: number) {
    this._valor = value;
  }
  public get data(): Date {
    return this._data;
  }
  private set data(value: Date) {
    this._data = value;
  }
}