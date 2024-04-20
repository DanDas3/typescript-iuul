import {Funcionario} from "./src/funcionario";
import {Cargo} from "./src/cargo";

let func1:Funcionario = new Funcionario('11111111111', 'Geraldo', '81999998888', 3000);
let func2:Funcionario = new Funcionario('22222222222', 'Roberta', '81999997777', 2500);

let gerente:Cargo = new Cargo('Gerente', func1);
func1.adicionarCargo(gerente);

let atendente:Cargo = new Cargo('Atendente', func2);
func2.adicionarCargo(atendente);
const imprimirFuncionario = (funcionario:Funcionario) => {
    console.log('Funcionario:',funcionario.nome,'\n','CPF:',funcionario.cpf,'\n','Telefone:', funcionario.telefone,'\n', 'Cargo(s):', funcionario.cargos.length > 0 ? funcionario.cargos.map((cargo:Cargo) => cargo.nome) : 'Sem cargo específico');
}

const imprimirCargo = (cargo:Cargo) => {
    console.log('Cargo:',cargo.nome,'\n','Funcionario(s):',cargo.funcionario.map((fun:Funcionario) => fun.nome));
}

imprimirFuncionario(func1);
imprimirFuncionario(func2);

imprimirCargo(gerente);
imprimirCargo(atendente);