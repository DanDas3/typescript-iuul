import {Cliente} from "./src/cliente";
import {ContaCorrente} from "./src/contaCorrente";
import {Endereco} from "./src/endereco";
import {ContaPoupanca} from "./src/contaPoupanca";

let cliente1:Cliente = new Cliente('11111111111','Paulo', '81999998888')

let contaCorrente:ContaCorrente = new ContaCorrente('11111',cliente1, 500);
cliente1.adicionarConta(contaCorrente)

let endereco1:Endereco = new Endereco('11111-111', 'Av endereço 1', '001', '', 'Recife', 'PE', cliente1);
cliente1.adicionarEndereco(endereco1);

contaCorrente.depositar(1000);

let cliente2:Cliente = new Cliente('22222222222','Paula', '81999997777')

let contaPoupanca:ContaPoupanca = new ContaPoupanca('2222',cliente2);
cliente2.adicionarConta(contaPoupanca)

let endereco2:Endereco = new Endereco('22222-222', 'Av endereço 2', '002', '', 'Recife', 'PE', cliente2);
cliente2.adicionarEndereco(endereco2);

contaPoupanca.depositar(1000);

contaCorrente.transferir(contaPoupanca, 500);

console.log("Saldo em Conta Corrente", contaCorrente.calcularSaldo());
console.log("Saldo em Conta Poupança", contaPoupanca.calcularSaldo());