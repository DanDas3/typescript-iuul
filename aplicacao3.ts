import {Cliente} from "./src/cliente";
import {Conta} from "./src/conta";
import {ContaCorrente} from "./src/contaCorrente";
import {Endereco} from "./src/endereco";

let cliente:Cliente = new Cliente('11111111111','Paulo', '81999998888')

let conta:ContaCorrente = new ContaCorrente('11111',cliente, 500);
cliente.adicionarConta(conta)

let endereco:Endereco = new Endereco('11111-111', 'Av endereço 1', '001', '', 'Recife', 'PE', cliente);
cliente.adicionarEndereco(endereco);

conta.depositar(100);
conta.depositar(100);
conta.depositar(100);

conta.sacar(50);

console.log('Saldo em conta:',conta.calcularSaldo());