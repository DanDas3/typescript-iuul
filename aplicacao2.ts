import {Endereco} from "./src/endereco";
import {Cliente} from "./src/cliente";
import {Conta} from "./src/conta";
import {ContaCorrente} from "./src/contaCorrente";

let cliente:Cliente = new Cliente('11111111111','Paulo', '81999998888')

let conta:Conta = new ContaCorrente('11111',cliente, 500);
cliente.adicionarConta(conta)

let endereco1:Endereco = new Endereco('11111-111', 'Av endereço 1', '001', '', 'Recife', 'PE', cliente);
let endereco2:Endereco = new Endereco('22222-222', 'Av endereço 2', '002', 'A', 'Recife', 'PE', cliente);
let endereco3:Endereco = new Endereco('33333-333', 'Av endereço 3', '003', '', 'Recife', 'PE', cliente);
let endereco4:Endereco = new Endereco('44444-444', 'Av endereço 4', '004', 'B', 'Recife', 'PE', cliente);
let endereco5:Endereco = new Endereco('55555-555', 'Av endereço 5', '005', '', 'Recife', 'PE', cliente);

cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);
cliente.adicionarEndereco(endereco4);
cliente.adicionarEndereco(endereco5);

const imprimirCliente = () => {
    console.log("Cliente:", cliente.nome,'\n', 'Endereços:',cliente.listarEnderecos().map((end:Endereco) => `Logradouro: ${end.logradouro} - CEP: ${end.cep} -> ${end.cliente.nome}`))
}

imprimirCliente();