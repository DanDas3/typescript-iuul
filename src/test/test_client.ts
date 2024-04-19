import {Cliente} from '../cliente'
const cli: Cliente = new Cliente('111','cli','444');

console.log('cpf', cli.cpf);
console.log('nome', cli.nome);
console.log('telefone', cli.telefone);

console.log('autenticar', cli.autenticar());