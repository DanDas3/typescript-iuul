import {Cliente} from "./src/cliente";
import {ContaCorrente} from "./src/contaCorrente";
import {Endereco} from "./src/endereco";
import {ContaPoupanca} from "./src/contaPoupanca";

let cliente1:Cliente = new Cliente('11111111111','Paulo', '81999998888')

let contaCorrente1:ContaCorrente = new ContaCorrente('11111',cliente1, 500);
cliente1.adicionarConta(contaCorrente1)

let endereco1:Endereco = new Endereco('11111-111', 'Av endereço 1', '001', '', 'Recife', 'PE', cliente1);
cliente1.adicionarEndereco(endereco1);

contaCorrente1.depositar(300);
contaCorrente1.limite = 100;

let cliente2:Cliente = new Cliente('22222222222','Paula', '81999997777')

let contaCorrente2:ContaCorrente = new ContaCorrente('2222',cliente2, 500);
cliente2.adicionarConta(contaCorrente2)

let endereco2:Endereco = new Endereco('22222-222', 'Av endereço 2', '002', '', 'Recife', 'PE', cliente2);
cliente2.adicionarEndereco(endereco2);

contaCorrente2.depositar(100);

try
{
    contaCorrente1.transferir(contaCorrente2, 1000);
} catch (e) {
    console.log(e.message);
}
