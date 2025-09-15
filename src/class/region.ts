import {Departement} from "./departement";

export class Region {
    private _name: string;
    private _code: string;
    private _departements: Array<Departement> = [];

    constructor(name:string, code:string) {
        this._name = name;
        this._code = code;
    }

    addDepartement(departement: Departement){
        this._departements.push(departement);
    }

}