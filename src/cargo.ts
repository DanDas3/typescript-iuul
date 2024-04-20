import {Funcionario} from "./funcionario";

export class Cargo {
    private _nome:string;
    private _funcionario:Funcionario[] = [];

    public constructor(nome:string, funcionario:Funcionario) {
        if(!funcionario){
            console.log("É necessário que exista pelo menos um funcionário, para ocupar um cargo!")
            return;
        }
        this.adicionarFuncionario(funcionario)
        this.nome = nome;
    }
    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }
    public get funcionario(): Funcionario[] {
        return this._funcionario;
    }

    public adicionarFuncionario(funcionario:Funcionario) {
        this._funcionario.push(funcionario);
    }
}