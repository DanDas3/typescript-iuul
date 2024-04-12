abstract class Conta {
  private numero: string;
  private creditos: Credito[];
  private debitos: Debito[];
  
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
      console.log('Saldo insuficiente para esta operação');      
      return;
    }

    let data: Date = new Date();
    this.debitos.push(new Debito(valor, data));
    
  }

  private calcularTotalCredito(): number {
    return this.creditos.reduce((total, credito) => total + credito.valor, 0);
  }

  private calcularTotalDebito(): number {
    return this.debitos.reduce((total, debito) => total + debito.valor, 0)
  }

  private temSaldoSuficiente(valorDebito: number):boolean {
    return this.calcularTotalCredito() > (this.calcularTotalDebito() + valorDebito);
  }
}