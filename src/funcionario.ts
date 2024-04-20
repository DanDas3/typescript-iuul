import {Pessoa} from "./pessoa";
import {IUsuario} from "./iusuario";
import {Cargo} from "./cargo";

export class Funcionario extends Pessoa implements IUsuario{
    private _salario:number;
    private _cargos:Cargo[] = [];

    public constructor(cpf:string, nome:string, telefone:string, salario:number, cargo:Cargo = null) {
        super(cpf, nome, telefone);
        if(salario) {
            this.salario = salario;
        }

        if(cargo) {
            this.adicionarCargo(cargo);
        }
    }

    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
    }

    get cargos(): Cargo[] {
        return this._cargos;
    }

    public adicionarCargo(cargo:Cargo) {
        this._cargos.push(cargo);
    }

    public autenticar(): boolean {
        return true;
    }
}