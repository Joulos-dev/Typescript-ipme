import {Ville} from "./ville";

export class Departement {
    private _name:string;
    private _code:string;
    private _villes: Array<Ville> = [];

    constructor(name:string, code:string) {
        this._name = name;
        this._code = code;
    }

    addVille(ville: Ville){
        this._villes.push(ville);
    }

}